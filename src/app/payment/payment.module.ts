import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';

@NgModule({
  declarations: [CreditCardComponent, PaymentFormComponent],
  imports: [CommonModule, PaymentRoutingModule, NgxMaskModule.forChild()],
})
export class PaymentModule {}
