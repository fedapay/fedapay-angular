import { Component } from '@angular/core';
import { CheckoutOptions } from '../../projects/fedapay-checkout/src/public_api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    title !: string; // Define the title property

    checkoutButtonOptions: CheckoutOptions = {
        transaction: {
            amount: 100,
            description: 'Airtime'
        },
        currency: {
            iso: 'XOF'
        },
        button: {
            class: 'btn btn-primary',
            text: 'Payer 100 FCFA'
        },
        onComplete(resp: any) {
            const FedaPay = (window as any) ['FedaPay'];
            if (resp.reason === FedaPay.DIALOG_DISMISSED) {
                alert('Vous avez fermé la boite de dialogue');
            } else {
                alert('Transaction terminée: ' + resp.reason);
            }

            console.log(resp.transaction);
        }
    };

    checkoutEmbedOptions: CheckoutOptions = {
        transaction: {
            amount: 100,
            description: 'Airtime'
        },
        currency: {
            iso: 'XOF'
        }
    };
}
