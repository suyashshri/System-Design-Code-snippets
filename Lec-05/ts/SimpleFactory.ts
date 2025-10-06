interface Burger {
  prepare(): void;
}

class BasicBurger implements Burger {
  prepare(): void {
    console.log("Preparing a Basic Burger with bun,patty and ketchup");
  }
}

class StandardBurger implements Burger {
  prepare(): void {
    console.log(
      "Preparing a Standard Burger with bun,patty,cheese, lettuce and ketchup"
    );
  }
}

class PremiumBurger implements Burger {
  prepare(): void {
    console.log(
      "Preparing a Premium Burger with bun,patty,cheese, lettuce,special sauces and ketchup"
    );
  }
}

class BurgerFactory {
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

const type = "standard";
const myBurger = new BurgerFactory();
const burger = myBurger.createBurger(type);
burger?.prepare();
