import Currency from './3-currency';

class Pricing {
    constructor(amount, currency) {
        if(typeof(amount) != 'number') {
            throw TypeError('Amount must be a number');
        }
        if(!(currency instanceof Currency)) {
            throw TypeError('urrency must be an instance of the Currency class');
        }
        this._amount = amount;
        this._currency = currency;
    }
    get amount() {
        return this._amount;
    }
    set amount(newamount) {
        if(typeof(newamount) !== 'number'){
            throw TypeError('Amount must be a number');
        }
        return this._amount = newamount;
    }
    get currency() {
        return this._currency;
    }
    set currency(newcurrency) {
        if(!(newcurrency instanceof Currency)) {
            throw TypeError('urrency must be an instance of the Currency class');
        }
        return this._currency = newcurrency;
    }
    displayFullPrice() {
        return `${this._amount} ${this.currency.name} (${this._currency.code})`;
    }
    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}

export default Pricing;
