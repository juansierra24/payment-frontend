import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardExpireDate',
})
export class CardExpireDatePipe implements PipeTransform {
  transform(value: Date | null, ...args: unknown[]): unknown {
    if (!value) return '';
    let year = value.getFullYear().toString();
    let month = (value.getMonth() + 1).toString().padStart(2, '0');
    return `${month}/${year}`;
  }
}
