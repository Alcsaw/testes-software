import Ordination from '../../../src/Lesson2/Ordination';

let ordination;
//let array: Number[] = [];
let array = Array<number>();

describe('Array', () => {

  beforeAll(() => {
    ordination = new Ordination();
    array = ordination.generateRandomArray();
  });

  it('should have a length of at least 4', () => {
    const length = array.length;

    expect(length).toBeGreaterThanOrEqual(4);
  });

  it('should have a length of 10 at most', () => {
    const length = array.length;

    expect(length).toBeLessThanOrEqual(10);
  });

  it('should only have numbers with 5 digits', () => {
    const has5digits = array.every(item => item.toString().length === 5)

    expect(has5digits).toBe(true);
  });

  it('should only have integer numbers', () => {
    const hasOnlyIntegers = array.every(item => Number.isInteger(item));

    expect(hasOnlyIntegers).toBe(true);
  });
});
