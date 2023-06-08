import { CardOptions } from './../../models/card-options.model';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss'],
})
export class CreditCardComponent implements OnInit, OnChanges {
  @Input() cardOptions!: CardOptions;

  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    this.cardOptions = changes['cardOptions'].currentValue;
  }
}
