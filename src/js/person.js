export default class Person {
  constructor(age, lifeExpect) {
    this.age = age;
    this.lifeExpect = lifeExpect;
  }

  lifeLeft() {
    this.yrsLeft = Math.abs(this.lifeExpect - this.age);
    return this.yrsLeft;
  }

  earthAge() {
    this.earthAge = Math.floor(this.age);
    this.earthyrsLeft = Math.abs(Math.floor(this.yrsLeft));
  }
  
  mercuryAge() {
    this.mercAge = Math.floor(this.age / .24);
    this.mercyrsLeft = Math.abs(Math.floor(this.yrsLeft / .24));
  }

  venusAge() {
    this.venusAge = Math.floor(this.age / .62);
    this.venusyrsLeft = Math.abs(Math.floor(this.yrsLeft / .62));

  }

  marsAge() {
    this.marsAge = Math.floor(this.age / 1.88);
    this.marsyrsLeft = Math.abs(Math.floor(this.yrsLeft / 1.88));
  }

  jupiterAge() {
    this.jupiterAge = Math.floor(this.age / 11.86);
    this.jupiteryrsLeft = Math.abs(Math.floor(this.yrsLeft / 11.86));
  }

}