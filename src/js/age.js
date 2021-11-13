export default class Person {
  constructor(age, lifeExpect) {
    this.age = age;
    this.lifeExpect = lifeExpect;
  }

  mercuryAge(){
    this.mercAge = Math.floor(this.age / .24);
    this.mercyrsLeft = Math.floor(this.yrsLeft / .24);
  }

  venusAge(){
    this.venusAge = Math.floor(this.age / .62);
    this.venusyrsLeft = Math.floor(this.yrsLeft / .62);

  }
  marsAge(){
    this.marsAge = Math.floor(this.age / 1.88);
  }
  jupiterAge(){
    this.jupiterAge = Math.floor(this.age / 11.86);
  }
  lifeLeft(){    
    this.yrsLeft = this.lifeExpect - this.age;
    return this.yrsLeft;
  }
}  