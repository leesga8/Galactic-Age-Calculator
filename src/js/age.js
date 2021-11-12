export default class Person {
  constructor(age) {
    this.age = age;
  }

  mercuryAge(mercAge){
    mercAge = Math.floor(this.age / .24);
    return mercAge;
  }

}    