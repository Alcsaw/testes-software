/**
 * Foi implementado um software que calcula o valor a pagar de boletos com os
 * seguintes requisitos:
 * - Até a data de vencimento é cobrado apenas o valor devido
 * - Após a data de vencimento é cobrado juros de 1% por mês de atraso.
 *
 * Utilizando o projeto abaixo (netbeans) faça os testes de integração
 * utilizando o jUnit e descubra se há erros no programa. Caso haja algum erro,
 * faça a identificação e posterior correção.
 */

import monthDiff from '../utils/monthDiff';

class Boleto {
  value: number;
  dueDate: Date;
  paymentDate: Date | undefined;
  interestRate: number = 0.01;

  constructor(value: number, dueDate: Date) {
    this.value = value;
    this.dueDate = dueDate;
  }

  getUpdatedValue(paymentDate: Date) {
    if (paymentDate <= this.dueDate) {
      return this.value;
    }

    const monthsLate = monthDiff(this.dueDate, paymentDate);
    console.log("aqui fora: ", paymentDate)

    return this.value + this.value * monthsLate * this.interestRate
  }

  pay(paymentDate: Date) {
    this.paymentDate = paymentDate;
    this.value = this.getUpdatedValue(paymentDate);
  }
}

export default Boleto;
