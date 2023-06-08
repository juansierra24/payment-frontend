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
export class CreditCardComponent {
  private _cardOptions!: CardOptions;

  @Input()
  set cardOptions(value: CardOptions) {
    this._cardOptions = value;
  }

  get cardOptions() {
    return this._cardOptions;
  }
}
