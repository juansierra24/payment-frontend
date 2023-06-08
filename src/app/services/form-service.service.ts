import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  paymentForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
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
    if (this.paymentForm.valid) {
      let formData = this.paymentForm.value;
      let endpoint = environment.hostUrl + '/api/v1/payment/validate';
      this.http.post<any>(endpoint, formData).subscribe({
        next: data => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Great...',
            text: 'Payment information is valid',
            showConfirmButton: false,
            timer: 1500,
          });
        },
        error: err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Payment information is invalid',
          });
        },
      });
    }
  }
}
