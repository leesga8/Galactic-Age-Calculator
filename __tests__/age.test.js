import Person from './../src/js/age'

describe('Person', () => {

  test('should create an person object with 1 age parameter', () => {
    const person = new Person(20);
    expect(person.age).toEqual(20);
  })
  test('should return age divided by .24 to equal mercury years', () =>{
    const person = new Person(20)
    expect(person.mercuryAge()).toEqual(83);
  })
});