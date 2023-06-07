import { FormServiceService } from './../../../services/form-service.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
})
export class PaymentFormComponent {
  constructor(public formService: FormServiceService) {}
}
