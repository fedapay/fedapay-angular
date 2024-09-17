import { NgModule, ModuleWithProviders } from '@angular/core';
import { FedaPayCheckoutDirective } from './fedapay-checkout.directive';

export interface FedaPayCheckoutModuleConfig {
    environment?: 'live' | 'production' | 'test' | 'sandbox' | 'dev' | 'local';
    url?: string;
    public_key?: string;
    locale?: 'en' | 'fr';
    app_id?: string;
}

@NgModule({
  declarations: [FedaPayCheckoutDirective],
  exports: [FedaPayCheckoutDirective],
})
export class FedaPayCheckoutModule {
  static forRoot(config: FedaPayCheckoutModuleConfig = {}): ModuleWithProviders<FedaPayCheckoutModule> {
    return {
      ngModule: FedaPayCheckoutModule,
      providers: [
        { provide : 'FedaPayCheckoutModuleConfig' , useValue: config }
      ]
    };
  }
}
