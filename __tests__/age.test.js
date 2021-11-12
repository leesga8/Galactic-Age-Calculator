import Age from '../src/js/age.js';

describe('Age', () => {

  test('should create an age object with one parameter', () => {
    const newAge = new Age(20);
    expect(newAge.age).toEqual(20);
  })
});