/*
Abstract class --> 
1. Act as an interface for the outside world to operate the car. 
2. This abstract class tells 'WHAT' all it can do rather then 'HOW' it does that.
3. Since this is an abstract class we cannot directly create Objects of this class. 
4. We need to Inherit it first and then that child class will have the responsibility to 
provide implementation details of all the abstract (virtual) methods in the class.

5. In our real world example of Car, imagine you sitting in the car and able to operate
the car (startEngine, accelerate, brake, turn) just by pressing or moving some
pedals/buttons/ steer the wheel etc. You dont need to know how these things work, and
also they are hidden under the hood.
6. This Class 'Car' denotes that (pedals/buttons/steering wheel etc). 
*/

abstract class Car {
  abstract startEngine(): void;
  abstract shiftGear(gear: number): void;
  abstract accelerate(): void;
  abstract brake(): void;
  abstract stopEngine(): void;
}

/*
1. This is a Concrete class (A class that provide implementation details of an abstract class).
Now anyone can make an Object of 'SportsCar' and can assign it to 'Car' (Parent class) pointer 
(See main method for this)

2. In our real world example of Car, as you cannot have a real car by just having its body only
(all these buttons or steering wheel). You need to have the actual implementation of 'What' happens
when we press these buttons. 'SportsCar' class denotes that actual implementation. 

3. Therefore, to denote a real world car in programming we created 2 classes.
One to denote all the user-interface like pedals, buttons, steering wheels etc ('Car' class).And,
Another one to denote the actual car with all the implementations of these buttons (SportsCar' class).
 
*/

class SportsCar extends Car {
  private brand: string;
  private model: string;
  private isEngineOn: boolean;
  private currentSpeed: number;
  private currentGear: number;

  constructor(brand: string, model: string) {
    super();
    this.brand = brand;
    this.model = model;
    this.isEngineOn = false;
    this.currentSpeed = 0;
    this.currentGear = 0;
  }

  startEngine(): void {
    this.isEngineOn = true;
    console.log(`${this.brand} ${this.model} : Engine starts with a roar!`);
  }

  shiftGear(gear: number): void {
    if (!this.isEngineOn) {
      console.log(
        `${this.brand} ${this.model} : Engine is off! Cannot Shift Gear.`
      );
      return;
    }
    this.currentGear = gear;
    console.log(
      `${this.brand} ${this.model} : Shifted to gear ${this.currentGear}`
    );
  }

  accelerate(): void {
    if (!this.isEngineOn) {
      console.log(
        `${this.brand} ${this.model} : Engine is off! Cannot Shift Gear.`
      );
      return;
    }
    this.currentSpeed += 20;
    console.log(
      `${this.brand} ${this.model} : Accelerating to ${this.currentSpeed} km/h`
    );
  }

  brake(): void {
    if (!this.isEngineOn) {
      console.log(
        `${this.brand} ${this.model} : Engine is off! Cannot Shift Gear.`
      );
      return;
    }
    this.currentSpeed -= 20;
    if (this.currentSpeed <= 0) {
      this.currentSpeed = 0;
    }
    console.log(
      `${this.brand} ${this.model} : Braking! Speed is now ${this.currentSpeed} km/h`
    );
  }

  stopEngine(): void {
    if (!this.isEngineOn) {
      console.log(
        `${this.brand} ${this.model} : Engine is off! Cannot Shift Gear.`
      );
      return;
    }
    this.isEngineOn = false;
    this.currentGear = 0;
    this.currentSpeed = 0;
    console.log(`${this.brand} ${this.model} : Engine turned off.`);
  }
}

const myCar: Car = new SportsCar("Ford", "Mustang");
myCar.startEngine();
myCar.shiftGear(1);
myCar.accelerate();
myCar.shiftGear(2);
myCar.accelerate();
myCar.brake();
myCar.stopEngine();
