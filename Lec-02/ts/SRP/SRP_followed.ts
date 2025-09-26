class SRP_Product2 {
  public name: string;
  public price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart2 {
  private products: SRP_Product2[];

  constructor() {
    this.products = [];
  }

  addProduct(p: SRP_Product2): void {
    this.products.push(p);
  }

  getProducts(): SRP_Product2[] {
    return this.products;
  }

  calculateTotal(): number {
    let total = 0;
    this.products.map((product) => (total += product.price));
    return total;
  }
}

class ShoppingCartPrinter {
  private cart: ShoppingCart2;

  constructor(c: ShoppingCart2) {
    this.cart = c;
  }

  printInvoice(): void {
    console.log("Shopping Cart Invoice");
    this.cart.getProducts().map((product: SRP_Product2) => {
      console.log(`${product.name} - Rs ${product.price}`);
    });
    console.log(`Total: Rs ${this.cart.calculateTotal()}`);
  }
}

class ShoppingCartStorage {
  private cart: ShoppingCart2;

  constructor(c: ShoppingCart2) {
    this.cart = c;
  }

  saveToDB() {
    console.log("Save data to DB");
  }
}

const new_cart = new ShoppingCart2();

new_cart.addProduct(new SRP_Product2("Mobile", 70000));
new_cart.addProduct(new SRP_Product2("Mouse", 2000));

const printer = new ShoppingCartPrinter(new_cart);
printer.printInvoice();

const db = new ShoppingCartStorage(new_cart);
db.saveToDB();
