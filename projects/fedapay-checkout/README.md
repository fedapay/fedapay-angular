# FedapayCheckout

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.15.

## Usage

```ts

//app.module.ts
import {FedaPayCheckoutModule} from 'fedapay-checkout';

//in imports @NgModule property, for sandbox or live account configuration
FedaPayCheckoutModule.forRoot({environment :"sandbox"})

//app.component.ts
this.payWidget = {
    url: 'https://sandbox-checkout.fedapay.com',
    public_key: 'YOUR_PUBLIC_KEY_HERE',
    transaction: {
        amount: 1000,
        description: 'Airtime'
    },
    currency: {
        iso: 'XOF'
    },
    button: {
      text: "Pay 1.000 F CFA"
    },
};


//app.component.html
 <button [fedaCheckoutOptions] = "payWidget"> Click on me </button>

  <div [fedaCheckoutOptions] = "payWidget_container"
    style="height : 500px; width: 500px; background-color: #eee">
  </div>
