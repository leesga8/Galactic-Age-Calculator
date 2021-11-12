export default class Person {
  constructor(age) {
    this.age = age;
  }

  mercuryAge(mercAge){
    mercAge = Math.floor(this.age / .24);
    console.log(mercAge);
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
  //lifeexpectancy
      // 20yrs old. 75 le. 55 yrs left
      // mer - x years left
      // v - x years left
      // earth - 20yrs old. 75 le. 55yrs left
      // mars - 29.2 mars years left
      // j -  x years left
}     