import { Input, ElementRef, OnInit, Directive, Inject } from '@angular/core';
import { FedaPayCheckoutModuleConfig } from './fedapay-checkout.module';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[fedaCheckoutOptions]'
})
export class FedaPayCheckoutDirective implements OnInit {
    hostElement: HTMLElement;

    /**
     * FedaPay checkout element options
     */
    @Input('fedaCheckoutOptions') options: any;

    /**
     * Set if the element should be for embed or not
     */
    @Input() embeded = false;

    constructor(
        private elementRef: ElementRef,
        @Inject('FedaPayCheckoutModuleConfig') private config: FedaPayCheckoutModuleConfig,
    ) {
        this.hostElement = this.elementRef.nativeElement as HTMLElement;
    }

    ngOnInit(): void {
        if (typeof (window as any)['FedaPay'] === 'undefined') {
            console.error('checkout.min.js script need to be included!');
        } else {
            this.initFedaPay();
        }
    }

    initFedaPay() {
        const FedaPay = (window as any)['FedaPay'];

        if (this.config.app_id) {
            this.options.site_domain = this.config.app_id;
        }
        const options = Object.assign(this.config, this.options);

        if (this.embeded) {
            options.container = this.hostElement;
            FedaPay.init(options);
        } else {
            FedaPay.init(this.hostElement, options);
        }
    }
}
