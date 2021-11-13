export default class Person {
  constructor(age, lifeExpect) {
    this.age = age;
    this.lifeExpect = lifeExpect;
  }

  mercuryAge(){
    this.mercAge = Math.floor(this.age / .24);
    return this.mercAge;
  }

  venusAge(){
    this.venusAge = Math.floor(this.age / .62);
    return this.venusAge;

  }
  marsAge(){
    this.marsAge = Math.floor(this.age / 1.88);
    return this.marsAge;
  }
  jupiterAge(){
    this.jupiterAge = Math.floor(this.age / 11.86);
    return this.jupiterAge;
  }
  lifeLeft(){    
    this.yrsLeft = this.lifeExpect - this.age;
    return this.yrsLeft;
  }
}  


  //lifeexpectancy
      // 20yrs old. 75 le. 55 yrs left
      // mer - x years left
      // v - x years left
      // earth - 20yrs old. 75 le. 55yrs left
      // mars - 29.2 mars years left
      // j -  x years left