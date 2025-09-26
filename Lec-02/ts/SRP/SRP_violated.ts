class SRP_Product1 {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  private products: SRP_Product1[];

  constructor() {
    this.products = [];
  }

  addProduct(p: SRP_Product1): void {
    this.products.push(p);
  }

  getProducts(): SRP_Product1[] {
    return this.products;
  }

  calculateTotal(): number {
    let n = this.products.length;
    let total = 0;
    this.products.map((product: SRP_Product1) => (total += product.price));
    return total;
  }

  printInvoice(): void {
    console.log("Shopping Cart Invoice");
    this.products.map((product: SRP_Product1) => {
      console.log(`${product.name} - Rs ${product.price}`);
    });
    console.log(`Total: Rs ${this.calculateTotal()}`);
  }

  saveToDB() {
    console.log("Save data to DB");
  }
}

const cart = new ShoppingCart();

cart.addProduct(new SRP_Product1("Laptop", 50000));
cart.addProduct(new SRP_Product1("Mouse", 2000));

cart.printInvoice();
cart.saveToDB();
