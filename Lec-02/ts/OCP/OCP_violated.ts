class OCP_Product1 {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart1 {
  private cart: OCP_Product1[];

  constructor() {
    this.cart = [];
  }

  addProduct(c: OCP_Product1) {
    this.cart.push(c);
  }

  getProduct(): OCP_Product1[] {
    return this.cart;
  }

  calculateTotal(): number {
    return this.cart.reduce((total, p) => total + p.price, 0);
  }
}

class ShoppingCartPrinter1 {
  private cart: ShoppingCart1;

  constructor(c: ShoppingCart1) {
    this.cart = c;
  }

  printInvoice(): void {
    console.log("Shopping Cart Invoice: ");

    for (const p of this.cart.getProduct()) {
      console.log(`${p.name} - Rs ${p.price}`);
    }

    console.log(`Total: Rs ${this.cart.calculateTotal()}`);
  }
}

class ShoppingCartStorage1 {
  private cart: ShoppingCart1;

  constructor(c: ShoppingCart1) {
    this.cart = c;
  }

  saveToSQLDb(): void {
    console.log("Saving shopping cart to SQL database...");
  }

  //   Adding more functions(saveToMongoDb(), saveToFile()) in this class to store data in MongoDB and file breaks the Open-close Principle of SOLID Principle
  saveToMongoDb(): void {
    console.log("Saving shopping cart to Mongo database...");
  }

  saveToFile(): void {
    console.log("Saving shopping cart to File...");
  }
}
