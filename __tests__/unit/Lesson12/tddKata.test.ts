import TDDKata from '../../../src/Lesson12/TDDKata';

let tddKata: TDDKata;

describe('TDDKata', () => {
  beforeAll(() => {
    tddKata = new TDDKata();
  })

  it('should return the sum of positive integer numbers in the string', () => {
    const stringOfIntegers = "1,2";
    const sum = tddKata.add(stringOfIntegers);

    expect(sum).toBe(3);
  });

  it('should return the sum of positive and negatives integer numbers in the string', () => {
    const stringOfIntegers = "1,2, -3";
    const sum = tddKata.add(stringOfIntegers);

    expect(sum).toBe(0);
  });

  it('should return the sum of positive integer numbers in the string separated by |', () => {
    const stringOfIntegers = "//|\n1|2| -3";
    const sum = tddKata.add(stringOfIntegers);

    expect(sum).toBe(0);
  });
});
