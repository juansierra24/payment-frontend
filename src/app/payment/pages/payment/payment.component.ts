import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, takeUntil } from 'rxjs';
import { FormServiceService } from 'src/app/services/form-service.service';
import { CardOptions } from '../../models/card-options.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit, OnDestroy {
  constructor(private formService: FormServiceService) {}

  paymentFormSubscription$!: Subscription;
  cardOptions!: CardOptions;

  ngOnInit(): void {
    this.paymentFormSubscription$ =
      this.formService.paymentForm.valueChanges.subscribe(
        (data: CardOptions) => {
          this.cardOptions = data;
        }
      );
  }
  ngOnDestroy(): void {
    this.paymentFormSubscription$.unsubscribe();
  }
}
