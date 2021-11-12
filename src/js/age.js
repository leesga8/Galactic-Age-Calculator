export default class Person {
  constructor(age) {
    this.age = age;
  }

  mercuryAge(mercAge){
    mercAge = Math.floor(this.age / .24);
    return mercAge;
  }

  venusAge(venusAge){
    venusAge = Math.floor(this.age / .62);
    return venusAge;

  }
  marsAge(marsAge){
    marsAge = Math.floor(this.age / 1.88);
    return marsAge;
  }
  jupiterAge(jupiterAge){
    jupiterAge = Math.floor(this.age / 11.86);
    return jupiterAge;
  }
}     