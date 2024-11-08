class Car {
  constructor(name, accelerationpower, brakingpower, speed=0, fuellevel=100) {
    this.name = name;
    this.accelerationpower = accelerationpower;
    this.brakingpower = brakingpower;
    this.speed = speed;
    this.fuellevel = fuellevel;
  }
    accelerate() {
        if (this.accelerationpower > 0) {
            this.speed += this.accelerationpower;
        }
        console.log(`Accelerating ${this.accelerationpower}.current speed:${this.speed}`);
  }
    break() {
        this.speed -= this.brakingpower;
    if (this.speed < 0) {
      this.speed = 0;
      console.log(`Brakes applied ${this.brakingpower}. current speed:${this.speed}`);
        }
        console.log(`breakingpower ${this.brakingpower}`);
  }
  checkspeed() {
    return `current speed ${this.speed}`;
  }
    refuel() {
        this.fuellevel = 100;
        console.log(`Refueled to maximum capicity ${this.fuellevel}`)
  }
}
const mycar=new Car("Thar",100,5)
mycar.accelerate();
mycar.break();
console.log(mycar.checkspeed());
mycar.refuel();