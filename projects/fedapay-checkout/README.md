# FedaPay Angular

FedaPay CheckoutJs integration for Angular projects.

## Install
From a command terminal type the following
```
npm install fedapay-angular --save
```

## Inject
Make fedapay-angular available throughout your app

```typescript
import { NgModule } from "@angular/core";
import { FedaPayCheckoutModule } from 'fedapay-checkout';

@NgModule({
  imports: [ FedaPayCheckoutModule.forRoot({ public_key: 'pk_sandbox_XXXXXX' }) ]
})
export class AppModule {}
```

> Please note, you only use `.forRoot()` on your base app module
>> This ONLY matters if you need to support lazy loading via loadChildren()

## Usage

```typescript
import { Component } from '@angular/core';
import { CheckoutOptions } from 'fedapay-checkout';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
        onComplete(resp) {
            const FedaPay = window['FedaPay'];
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
```
In your component's view

```html
<!--- app.component.html -->
 <button [fedaCheckoutOptions]="checkoutButtonOptions"> Click on me </button>

<div [fedaCheckoutOptions]="checkoutEmbedOptions" style="height : 500px; width: 500px; background-color: #eee">
</div>
```
