import { CardOptions } from './../../models/card-options.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss'],
})
export class CreditCardComponent implements OnInit {
  @Input() cardOptions: CardOptions = {} as CardOptions;

  constructor() {}

  ngOnInit(): void {}
}
