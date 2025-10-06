// --- Product 1: Burger hierarchy ---
abstract class Burger3 {
  abstract prepare(): void;
}

class BasicBurger3 extends Burger3 {
  prepare(): void {
    console.log("Preparing Basic Burger with bun, patty, and ketchup!");
  }
}

class StandardBurger3 extends Burger3 {
  prepare(): void {
    console.log(
      "Preparing Standard Burger with bun, patty, cheese, and lettuce!"
    );
  }
}

class PremiumBurger3 extends Burger3 {
  prepare(): void {
    console.log(
      "Preparing Premium Burger with gourmet bun, premium patty, cheese, lettuce, and secret sauce!"
    );
  }
}

class BasicWheatBurger3 extends Burger3 {
  prepare(): void {
    console.log("Preparing Basic Wheat Burger with bun, patty, and ketchup!");
  }
}

class StandardWheatBurger3 extends Burger3 {
  prepare(): void {
    console.log(
      "Preparing Standard Wheat Burger with bun, patty, cheese, and lettuce!"
    );
  }
}

class PremiumWheatBurger3 extends Burger3 {
  prepare(): void {
    console.log(
      "Preparing Premium Wheat Burger with gourmet bun, premium patty, cheese, lettuce, and secret sauce!"
    );
  }
}

// --- Product 2: GarlicBread hierarchy ---
abstract class GarlicBread {
  abstract prepare(): void;
}

class BasicGarlicBread extends GarlicBread {
  prepare(): void {
    console.log("Preparing Basic Garlic Bread with butter and garlic!");
  }
}

class CheeseGarlicBread extends GarlicBread {
  prepare(): void {
    console.log("Preparing Cheese Garlic Bread with extra cheese and butter!");
  }
}

class BasicWheatGarlicBread extends GarlicBread {
  prepare(): void {
    console.log("Preparing Basic Wheat Garlic Bread with butter and garlic!");
  }
}

class CheeseWheatGarlicBread extends GarlicBread {
  prepare(): void {
    console.log(
      "Preparing Cheese Wheat Garlic Bread with extra cheese and butter!"
    );
  }
}

// --- Abstract Factory ---
abstract class MealFactory {
  abstract createBurger(type: string): Burger3 | null;
  abstract createGarlicBread(type: string): GarlicBread | null;
}

// --- Concrete Factories ---
class SinghBurger3 extends MealFactory {
  createBurger(type: string): Burger3 | null {
    if (type === "basic") return new BasicBurger3();
    if (type === "standard") return new StandardBurger3();
    if (type === "premium") return new PremiumBurger3();
    console.log("Invalid burger type!");
    return null;
  }

  createGarlicBread(type: string): GarlicBread | null {
    if (type === "basic") return new BasicGarlicBread();
    if (type === "cheese") return new CheeseGarlicBread();
    console.log("Invalid garlic bread type!");
    return null;
  }
}

class KingBurger3 extends MealFactory {
  createBurger(type: string): Burger3 | null {
    if (type === "basic") return new BasicWheatBurger3();
    if (type === "standard") return new StandardWheatBurger3();
    if (type === "premium") return new PremiumWheatBurger3();
    console.log("Invalid burger type!");
    return null;
  }

  createGarlicBread(type: string): GarlicBread | null {
    if (type === "basic") return new BasicWheatGarlicBread();
    if (type === "cheese") return new CheeseWheatGarlicBread();
    console.log("Invalid garlic bread type!");
    return null;
  }
}

// --- Client code (usage) ---
const burgerType = "basic";
const garlicBreadType = "cheese";

// swap factory here to change family
const mealFactory: MealFactory = new KingBurger3();

const burger3 = mealFactory.createBurger(burgerType);
const garlicBread = mealFactory.createGarlicBread(garlicBreadType);

if (burger3) burger3.prepare();
if (garlicBread) garlicBread.prepare();
