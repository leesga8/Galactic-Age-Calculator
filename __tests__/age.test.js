import Person from './../src/js/age'

describe('Person', () => {
  let person;

  beforeEach(() => {
    person = new Person(20, 75);
    person.lifeLeft();
  })
  test('should create an person object with 1 age parameter', () => {
    expect(person.age).toEqual(20);
    expect(person.yrsLeft).toEqual(55)
  })
  test('should return age divided by .24 to equal mercury years', () =>{
    person.mercuryAge()
    expect(person.mercAge).toEqual(83);
    expect(person.mercyrsLeft).toEqual(229)
  })
  test('should return age divided by .62 to equal venus years', () =>{
    person.venusAge()
    expect(person.venusAge).toEqual(32);
    expect(person.venusyrsLeft).toEqual(88)
  })
  test('should return age divided by 1.88 to equal mars years', () =>{
    expect(person.marsAge()).toEqual(10);
  })
  test('should return age divided by 11.86 to equal jupiter years', () =>{
    expect(person.jupiterAge()).toEqual(1);
  })
  test('should return return life left when inputted life expectancy', () =>{
    expect(person.lifeLeft()).toEqual(55);
  })
});