import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FedaPayCheckoutModule } from '../../projects/fedapay-checkout/src/lib/fedapay-checkout.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FedaPayCheckoutModule.forRoot({ public_key: 'pk_sandbox_XXXXXX' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
