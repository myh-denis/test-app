import { Component, Input, OnInit, Optional, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-input-errors',
  templateUrl: './input-errors.component.html',
  encapsulation: ViewEncapsulation.None
})
export class InputErrorsComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  errorLabel: Observable<string>;

  constructor(@Optional() public formGroup: FormGroupDirective) {
  }

  ngOnInit() {
    this.errorLabel = of(null, this.control.statusChanges)
      .pipe(
        map(() => {
          if (!this.control.errors) {
            return null;
          }

          const firstKey = Object.keys(this.control.errors)[0];
          return this.control.errors[firstKey];
        })
      );
  }
}
