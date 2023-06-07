import { Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  paymentForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  private createForm() {
    this.paymentForm = this.fb.group({
      cardNumber: ['', Validators.required],
      cardName: ['', Validators.required],
      expirationDate: [null, Validators.required],
      cvv: ['', Validators.required],
    });
  }

  submitForm() {
    console.log(this.paymentForm);
  }
}
