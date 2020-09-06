import Ordination from '../../../src/Lesson2/Ordination';

let ordination: Ordination;
let array = Array<number>();
//let orderedArray = Array<number>();

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

describe('Ordenation', () => {
  beforeEach(() => {
    ordination = new Ordination();
    array = ordination.generateRandomArray();
  });

  it('should return 0 when input is not valid (small numbers)', () => {
    const result = ordination.orderArray([30744, 43360, 46802, 83314, 2]);

    expect(result).toBe(0);
  });
  it('should return 0 when input is not valid (big numbers)', () => {
    const result = ordination.orderArray([30744, 43360, 46802, 83314123435]);

    expect(result).toBe(0);
  });

  it('should return 0 when input is not valid (array length - short)', () => {
    const result = ordination.orderArray([30744, 46802, 89074]);

    expect(result).toBe(0);
  });

  it('should return 0 when input is not valid (array length - short)', () => {
    const result = ordination.orderArray([30744, 46802, 89074, 30744, 46802,
      89074, 30744, 46802, 89074, 30744, 46802, 89074]);

    expect(result).toBe(0);
  });

  it('should return 0 when input is not valid', () => {
    const result = ordination.orderArray();

    expect(result).toBe(1);
  });

  it('should order the array in asceding order', () => {
    ordination.orderArray();

    const reversedArray = ordination.array.reverse();
    let inOrder = true;

    for (let i = 0; i < reversedArray.length; i++) {
      if (reversedArray[i] - reversedArray[i + 1] < 0) {
        inOrder = false;
        break;
      }
    }

    expect(inOrder).toBe(true);
  });
});
