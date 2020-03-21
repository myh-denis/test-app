import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { API_ROOT } from './constants/api-root.const';
import { CoreModule } from './core/core.module';
import { CoreComponent } from './core/core.component';


const optionalModules = !environment.production ?
  [
    StoreDevtoolsModule.instrument({
      maxAge: 50,
      logOnly: false
    })
  ] : [];

@NgModule({
  imports: [
    CoreModule,
    ...optionalModules
  ],
  bootstrap: [CoreComponent],
  providers: [
    {
      provide: API_ROOT,
      useValue: environment.API_ROOT
    }
  ]
})
export class AppBrowserModule {
}
