import Person from '../src/js/age.js';

describe('Age', () => {

  test('should create an age object with one parameter', () => {
    const person = new Person(20);
    expect(person.age).toEqual(20);
  })
  // test('should return age in mercury years', () =>{
  //   const mercAge = new 
  // })
});