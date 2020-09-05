import Triangle from '../../../src/Lesson2/Triangle';

let triangle: Triangle;
const equilateral = [2, 2, 2];
const isosceles = [1, 2, 2];
const scalene = [3, 4, 5];
const notTriangle = [1, 1, 4];
const invalidInput = [100, 200, 200];

describe('Triangle', () => {
  beforeAll(() => {
    triangle = new Triangle();
  })

  it('should return 0 when inputs are not valid', () => {
    const type = triangle.getType(invalidInput[0],
      invalidInput[1],
      invalidInput[2]);

    expect(type).toBe(0);
  });

  it('should return 1 when the triangle is equilateral', () => {
    const type = triangle.getType(equilateral[0],
      equilateral[1],
      equilateral[2]);

    expect(type).toBe(1);
  });

  it('should return 2 when the triangle is isosceles', () => {
    const type = triangle.getType(isosceles[0],
      isosceles[1],
      isosceles[2]);

    expect(type).toBe(2);
  });

  it('should return 3 when the triangle is scalene', () => {
    const type = triangle.getType(scalene[0],
      scalene[1],
      scalene[2]);

    expect(type).toBe(3);
  });

  it('should return 4 when the inputs doesn\'t correspond to a triangle', () => {
    const type = triangle.getType(notTriangle[0],
      notTriangle[1],
      notTriangle[2]);

    expect(type).toBe(4);
  });
});
