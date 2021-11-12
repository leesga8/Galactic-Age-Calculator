import Person from './../src/js/age'

describe('Person', () => {
  let person;

  beforeEach(() => {
    person = new Person(20)
  })
  test('should create an person object with 1 age parameter', () => {
    expect(person.age).toEqual(20);
  })
  test('should return age divided by .24 to equal mercury years', () =>{
    expect(person.mercuryAge()).toEqual(83);
  })
});