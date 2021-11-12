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
  test('should return age divided by .62 to equal venus years', () =>{
    expect(person.venusAge()).toEqual(32);
  })
  test('should return age divided by 1.88 to equal mars years', () =>{
    expect(person.marsAge()).toEqual(10);
  })
  test('should return age divided by 11.86 to equal jupiter years', () =>{
    expect(person.jupiterAge()).toEqual(1);
  })
});