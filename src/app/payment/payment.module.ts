import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PaymentRoutingModule } from './payment-routing.module';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { NgxMaskModule } from 'ngx-mask';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PaymentComponent } from './pages/payment/payment.component';
@NgModule({
  declarations: [CreditCardComponent, PaymentFormComponent, PaymentComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    CalendarModule,
    NgxMaskModule.forChild(),
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
  ],
})
export class PaymentModule {}
