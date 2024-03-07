// Implementation of a class named Pricing.
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = 0; // Initialize with 0.
    this._currency = new Currency('', ''); // Initialise with Empty object

    // Setters for verifications
    this.amount = amount;
    this.currency = currency;
  }

  // Amount Getter
  get amount() {
    return this._amount;
  }

  // Amount Setter
  set amount(value) {
    if (typeof value === 'number') {
      this._amount = value;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  // Currency Getter
  get currency() {
    return this._currency;
  }

  // Currency Setter
  set currency(value) {
    if (value instanceof Currency) {
      this._currency = value;
    } else {
      throw new TypeError('Invalid currency object. Must be an instance of Currency class.');
    }
  }

  // A method displayFullPrice to display Full Price
  displayFullPrice() {
    return (`${this._amount} ${this._currency._name} (${this._currency._code})`);
  }

  // A Static method convertPrice to convert price
  static convertPrice(amount, conversionRate) {
    let result = 0;

    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      result = amount * conversionRate;
    } else {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }

    return result;
  }
}
