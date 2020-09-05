import Conversion from '../../../src/Lesson2/Conversion';

let conversion: Conversion;
const csvOfIntegers = "1,2,3,4,5,6";
const csvWithoutNumbers = "a,b,c,d,e5,6.2";
const csvWithNumbersAndLetters = "1,a,2,b,3,c, 3.2, 4.4";

describe('Conversion', () => {
  beforeAll(() => {
    conversion = new Conversion();
  })

  it('should return an Array of integer numbers when the CSV only contains integers', () => {
    const array = conversion.getIntegersFromCSV(csvOfIntegers);

    const hasOnlyIntegers = array.length > 0
      ? array.every(item => Number.isInteger(item) && item > 0)
      : false;

    expect(hasOnlyIntegers).toBe(true);
  });

  it('should return an Array of the same size as input when the input is correct', () => {
    const array = conversion.getIntegersFromCSV(csvOfIntegers);

    const sameSize = array.length === csvOfIntegers.split(',').length;

    expect(sameSize).toBe(true);
  });

  it('should return an empty Array when the CSV doesn\'t contains any integer', () => {
    const array = conversion.getIntegersFromCSV(csvWithoutNumbers);

    const emptyArray = array.length === 0;

    expect(emptyArray).toBe(true);
  });

  it('should return an Array with only integers even when there are other data in the CSV', () => {
    const array = conversion.getIntegersFromCSV(csvWithNumbersAndLetters);

    const hasOnlyIntegers = array.length > 0
      ? array.every(item => Number.isInteger(item) && item > 0)
      : false;

    expect(hasOnlyIntegers).toBe(true);
  })
});