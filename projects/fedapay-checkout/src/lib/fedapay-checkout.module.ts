import { NgModule, ModuleWithProviders } from '@angular/core';
import { FedaPayCheckoutDirective } from './fedapay-checkout.directive';

export interface FedaPayCheckoutModuleConfig {
    environment?: 'live' | 'production' | 'test' | 'sandbox' | 'dev' | 'local';
    url?: string;
    public_key?: string;
    locale?: 'en' | 'fr';
}

@NgModule({
  declarations: [FedaPayCheckoutDirective],
  exports: [FedaPayCheckoutDirective],
})
export class FedaPayCheckoutModule {
  static forRoot(config : FedaPayCheckoutModuleConfig = {}) : ModuleWithProviders {
    return {
      ngModule: FedaPayCheckoutModule,
      providers: [
        { provide : 'FedaPayCheckoutModuleConfig' , useValue: config }
      ]
    };
  }
}
