class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  private products: Product[];

  constructor() {
    this.products = [];
  }

  addProduct(p: Product): void {
    this.products.push(p);
  }

  getProducts(): Product[] {
    return this.products;
  }

  calculateTotal(): number {
    let n = this.products.length;
    let total = 0;
    this.products.map((product: Product) => (total += product.price));
    return total;
  }

  printInvoice(): void {
    console.log("Shopping Cart Invoice");
    this.products.map((product: Product) => {
      console.log(`${product.name} - Rs ${product.price}`);
    });
    console.log(`Total: Rs ${this.calculateTotal()}`);
  }

  saveToDB() {
    console.log("Save data to DB");
  }
}

const cart = new ShoppingCart();

cart.addProduct(new Product("Laptop", 50000));
cart.addProduct(new Product("Mouse", 2000));

cart.printInvoice();
cart.saveToDB();
