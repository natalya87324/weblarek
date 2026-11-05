import { TPayment, IBuyer, TBuyerErrors } from '../../types/index';

export class Buyer {
  private payment: TPayment | '';
  private email: string;
  private phone: string;
  private address: string;

  constructor() {
    this.payment = '';
    this.email = '';
    this.phone = '';
    this.address = '';
  }

  setPayment(payment: TPayment): void {
    this.payment = payment;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  setPhone(phone: string): void {
    this.phone = phone;
  }

  setAddress(address: string): void {
    this.address = address;
  }

  getData(): IBuyer {
    return {
      payment: this.payment,
      email: this.email,
      phone: this.phone,
      address: this.address
    }
  }

  clear(): void {
    this.payment = '';
    this.email = '';
    this.phone = '';
    this.address = '';
  }

  validate(): TBuyerErrors {
    const errors: TBuyerErrors = {};

    if (this.payment === '') {
      errors.payment = 'Не выбран тип оплаты';
    }

    if (this.email.trim() === '') {
      errors.email = 'Укажите ваш адрес электронной почты';
    }

    if (this.phone.trim() === '') {
      errors.phone = 'Укажите ваш номер телефона';
    }

    if (this.address.trim() === '') {
      errors.address = 'Укажите ваш адрес';
    }

    return errors;
  }
}
       