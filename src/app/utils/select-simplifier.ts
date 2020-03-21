import { select, Store } from '@ngrx/store';
import { MemoizedSelector, MemoizedSelectorWithProps } from '@ngrx/store/src/selector';
import { merge, noop, Observable, Subscription, combineLatest } from 'rxjs';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';

export class SelectSimplifier<T, C = any> {
  private store: Store<T>;
  private readonly context;
  private obsCollection: Observable<any>[] = [];
  private destroyed: Observable<any>;
  private dueTime: number;

  constructor(store: Store<T>, context?: C) {
    this.store = store;
    this.context = context;
  }

  select(selector: MemoizedSelector<T, any> | MemoizedSelectorWithProps<T, any, any>, cb) {
    const obs = this.store.pipe(
      select(selector),
      tap(cb)
    );

    return this.addObservable(obs);
  }

  selectInKey(selector: MemoizedSelector<T, any> | MemoizedSelectorWithProps<T, any, any>, key: keyof C) {
    if (!this.context) {
      throw new Error('Select Simplifier: Context does not exists');
    }
    return this.select(selector, value => this.context[key] = value);
  }

  selectMany(selectors: Array<MemoizedSelector<T, any> | MemoizedSelectorWithProps<T, any, any>>, cb) {
    const selections = selectors.map((selector) => {
      return this.store.pipe(
        select(selector)
      );
    });

    const obs = combineLatest(selections).pipe(
      tap(cb)
    );

    return this.addObservable(obs);
  }

  addObservable(obs: Observable<any>) {
    this.obsCollection.push(obs);

    return this;
  }

  takeUntil(source: Observable<any>) {
    this.destroyed = source;
    return this;
  }

  debounceTime(dueTime?: number) {
    this.dueTime = dueTime || 0;
    return this;
  }

  subscribe(cb = noop): Subscription {
    if (!this.obsCollection.length) {
      return null;
    }

    let source$ = merge(...this.obsCollection);

    if (this.destroyed) {
      source$ = source$.pipe(takeUntil(this.destroyed));
    }

    if (this.dueTime !== undefined) {
      source$ = source$.pipe(debounceTime(this.dueTime));
    }

    return source$.subscribe(cb);
  }
}
