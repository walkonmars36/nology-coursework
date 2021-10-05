class Vehicle {
  constructor(name, size) {
    this.name = name;
    this.size = size;
    this.currentVelocity = 0;
    this.currentDirection = 0;
  }

  getCurrentDirection() {
    return this.currentDirection;
  }

  getCurrentVelocity() {
    return this.currentVelocity;
  }

  steer(direction) {
    this.currentDirection += direction;
    console.log("Vehicle.steer(): Steering at " + this.currentDirection + " degrees");
  }

  move(velocity, direction) {
    this.currentVelocity = velocity;
    this.currentDirection = direction;
    console.log("Vehicle.move(): Moving at " + this.currentVelocity + "mph in a direction of " + this.currentDirection + " degrees.");
  }

  stop() {
    this.currentVelocity = 0;
  }
}

class Car extends Vehicle {
  constructor(name, size, wheels, doors, gears, isManual) {
    super(name, size);
    this.wheels = wheels;
    this.doors = doors;
    this.gears = gears;
    this.isManual = isManual;
    this.currentGear = 1;
  }

  changeGear(currentGear) {
    this.currentGear = currentGear;
    console.log("Car.changeGear(): Change to gear " + this.currentGear);
  }

  changeVelocity(speed, direction) {
    console.log("Car.changeVelocity(): Velocity " + speed + " direction " + direction);
    super.move(speed, direction);
  }
}

const marksVehicle = new Vehicle("tractor", "large");
const marksCar = new Car("MG", "medium", 4, 5, 5, false);

// marksVehicle.steer(45);
// marksVehicle.move(30, 60);

// console.log(marksVehicle);
// console.log(marksCar);

class Ferrari extends Car {
  constructor(roadServiceMonths) {
    super("Ferrari", "RWD", 4, 5, 6, false);
    this.roadServiceMonths = roadServiceMonths;
  }

  // rate is difference in speed from the current speed
  accelerate(rate) {
    let newVelocity = super.getCurrentVelocity() + rate;
    if (newVelocity === 0) {
      super.stop();
      super.changeGear(1);
    } else if (newVelocity > 0 && newVelocity <= 10) {
      super.changeGear(1);
    } else if (newVelocity > 10 && newVelocity <= 20) {
      super.changeGear(2);
    } else if (newVelocity > 20 && newVelocity <= 30) {
      super.changeGear(3);
    } else {
      super.changeGear(4);
    }
    if (newVelocity > 0) {
      super.changeVelocity(newVelocity, super.getCurrentDirection());
    }
  }
}

const ferrari = new Ferrari(7);

ferrari.steer(45);
ferrari.accelerate(30);
ferrari.accelerate(20);
