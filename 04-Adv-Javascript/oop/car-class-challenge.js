class Vehicle {
  constructor(engineSize, gears, fuelType, steeringDirection) {
    this.engineSize = engineSize;
    this.gears = gears;
    this.fuelType = fuelType;
    this.steeringDirection = steeringDirection;
  }
}

class Car extends Vehicle {
  constructor(engineSize, gears, fuelType, steeringDirection, speed, maxSpeed) {
    super(engineSize, gears, fuelType, steeringDirection);
    this.speed = speed;
    this.maxSpeed = maxSpeed;
  }

  speedUp() {
    if (this.speed < this.maxSpeed) {
      return `You can speed up, the maximum speed is ${this.maxSpeed}`;
    } else {
      return `Slow down, you are driving too fast!`;
    }
  }

  slowDown() {}

  changeGears() {
    if (this.gears <= 5 && this.speed >= 40) {
      return `Gear ${this.gears} is too low at ${this.speed} mph. You need to change up.`;
    } else {
      return `Keep driving`;
    }
  }

  changeDirection() {}

  stop() {}
}

class Audi extends Car {
  constructor(engineSize, gears, fuelType, steeringDirection, speed, maxSpeed, brand, slogan) {
    super(engineSize, gears, fuelType, steeringDirection, speed, maxSpeed);
    this.brand = brand;
    this.slogan = slogan;
  }

  getSlogan() {
    return `${this.brand} has a famous slogan, which is ${this.slogan} `;
  }
}

const audi = new Audi("2000cc", "3", "petrol", "left", 60, 70, "Audi", "Vorsprung Durch Technik");

console.log(audi.changeGears());
