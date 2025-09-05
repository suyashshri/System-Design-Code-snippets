abstract class Car {
  abstract startEngine(): void;
  abstract shiftGear(gear: number): void;
  abstract accelerate(): void;
  abstract brake(): void;
  abstract stopEngine(): void;
}

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
