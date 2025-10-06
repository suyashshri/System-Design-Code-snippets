interface Burger2 {
  prepare(): void;
}

class BasicBurger2 implements Burger2 {
  prepare(): void {
    console.log("Preparing a Basic Burger with bun,patty and ketchup");
  }
}

class StandardBurger2 implements Burger2 {
  prepare(): void {
    console.log(
      "Preparing a Standard Burger with bun,patty,cheese, lettuce and ketchup"
    );
  }
}

class PremiumBurger2 implements Burger2 {
  prepare(): void {
    console.log(
      "Preparing a Premium Burger with bun,patty,cheese, lettuce,special sauces and ketchup"
    );
  }
}

class BasicWheatBurger2 implements Burger2 {
  prepare(): void {
    console.log("Preparing a Basic Wheat Burger with bun,patty and ketchup");
  }
}

class StandardWheatBurger2 implements Burger2 {
  prepare(): void {
    console.log(
      "Preparing a Standard Wheat Burger with bun,patty,cheese, lettuce and ketchup"
    );
  }
}

class PremiumWheatBurger2 implements Burger2 {
  prepare(): void {
    console.log(
      "Preparing a Premium Wheat Burger with bun,patty,cheese, lettuce,special sauces and ketchup"
    );
  }
}

interface BurgerFactory2 {
  createBurger(type: string): Burger2 | null;
}

class SinghBurger implements BurgerFactory2 {
  createBurger(
    type: string
  ): BasicBurger | StandardBurger | PremiumBurger | null {
    if (type == "basic") {
      return new BasicBurger2();
    } else if (type == "standard") {
      return new StandardBurger2();
    } else if (type == "premium") {
      return new PremiumBurger2();
    } else {
      console.log("Invalid burger type!");
      return null;
    }
  }
}

class KingBurger implements BurgerFactory2 {
  createBurger(
    type: string
  ): BasicWheatBurger2 | StandardWheatBurger2 | PremiumWheatBurger2 | null {
    if (type == "basic") {
      return new BasicWheatBurger2();
    } else if (type == "standard") {
      return new StandardWheatBurger2();
    } else if (type == "premium") {
      return new PremiumWheatBurger2();
    } else {
      console.log("Invalid burger type!");
      return null;
    }
  }
}

class BurgerFactory2 {
  createBurger(type: string) {
    if (type == "basic") {
      return new BasicBurger();
    } else if (type == "standard") {
      return new StandardBurger();
    } else if (type == "premium") {
      return new PremiumBurger();
    } else {
      return null;
    }
  }
}

const type2 = "basic";

const myFactory: BurgerFactory = new KingBurger();
const burger2 = myFactory.createBurger(type2);

if (burger2) {
  burger2.prepare();
}
