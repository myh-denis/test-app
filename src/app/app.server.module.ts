import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { environment } from '../environments/environment';
import { API_ROOT } from './constants/api-root.const';
import { CoreComponent } from './core/core.component';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    CoreModule,
    ServerModule,
  ],
  bootstrap: [CoreComponent],
  providers: [
    {
      provide: API_ROOT,
      useValue: environment.API_ROOT
    }
  ]
})
export class AppServerModule {
}
