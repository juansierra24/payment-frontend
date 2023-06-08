import { CardExpireDatePipe } from './card-expire-date.pipe';

describe('CardExpireDatePipe', () => {
  it('create an instance', () => {
    const pipe = new CardExpireDatePipe();
    expect(pipe).toBeTruthy();
  });
});
