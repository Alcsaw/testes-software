import Boleto from '../../../src/Lesson4/Boleto';

let boleto: Boleto;
const value = 100;
const dueDate = new Date(2020, 8, 22);

describe('Boleto', () => {
  beforeAll(() => {
    boleto = new Boleto(value, dueDate);
  });

  it('should be charged the original value until due month', () => {
    expect(boleto.getUpdatedValue(dueDate)).toBe(value);
  });

  it('should be charged the original value in a month before due date', () => {
    const beforeDueDate = new Date(dueDate);
    beforeDueDate.setMonth(dueDate.getMonth() - 1);

    expect(boleto.getUpdatedValue(beforeDueDate)).toBe(value);
  });

  it('should be charged an additional interestRate for each month after dueDate', () => {
    const afterDueDate = new Date(dueDate);
    afterDueDate.setMonth(dueDate.getMonth() + 1);

    const newValue = boleto.value + boleto.value * 1 * boleto.interestRate

    expect(boleto.getUpdatedValue(afterDueDate)).toBe(newValue);
  });
});
