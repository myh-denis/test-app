import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { CART_STORE_KEY } from './constants';
import { coreRoutes } from './core-routing';

import { CoreComponent } from './core.component';
import { cartReducer } from './reducers/cart.reducers';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({
      [CART_STORE_KEY]: cartReducer,
      router: routerReducer,
    }),
    EffectsModule.forRoot([]),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(coreRoutes),
    StoreRouterConnectingModule.forRoot(),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    CoreComponent,
    CartComponent,
    HeaderComponent
  ],
  providers: [],
  bootstrap: [CoreComponent]
})
export class CoreModule {
}
