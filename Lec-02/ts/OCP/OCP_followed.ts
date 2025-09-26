class OCP_Product2 {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class OCP_ShoppingCart2 {
  private cart: OCP_Product2[] = [];

  addProduct(c: OCP_Product2) {
    this.cart.push(c);
  }

  getProduct(): OCP_Product2[] {
    return this.cart;
  }

  calculateTotal(): number {
    return this.cart.reduce((total, p) => total + p.price, 0);
  }
}

class OCP_ShoppingCartPrinter2 {
  private cart: OCP_ShoppingCart2;

  constructor(c: OCP_ShoppingCart2) {
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

// So better to abstract out the OCP_ShoppingCartStorage2 class and make child class whihc wll extend/implement theparent class

abstract class OCP_ShoppingCartStorage2 {
  abstract save(cart: OCP_ShoppingCart2): void;
}

class OCP_saveToSQLDb extends OCP_ShoppingCartStorage2 {
  save(cart: OCP_ShoppingCart2): void {
    console.log("Saving shopping cart to SQL database...");
  }
}

class OCP_saveToMongoDb extends OCP_ShoppingCartStorage2 {
  save(cart: OCP_ShoppingCart2): void {
    console.log("Saving shopping cart to Mongo database...");
  }
}

class OCP_saveToFile extends OCP_ShoppingCartStorage2 {
  save(cart: OCP_ShoppingCart2): void {
    console.log("Saving shopping cart to File...");
  }
}

const OCP_cart2 = new OCP_ShoppingCart2();

OCP_cart2.addProduct(new OCP_Product2("Laptop", 70000));
OCP_cart2.addProduct(new OCP_Product2("Mouse", 5000));

const ocp_printer2 = new OCP_ShoppingCartPrinter2(OCP_cart2);
ocp_printer2.printInvoice();

const database: OCP_ShoppingCartStorage2 = new OCP_saveToSQLDb();
const mongo: OCP_ShoppingCartStorage2 = new OCP_saveToMongoDb();
const file: OCP_ShoppingCartStorage2 = new OCP_saveToFile();

database.save(OCP_cart2); // Save to SQL database
mongo.save(OCP_cart2); // Save to MongoDB
file.save(OCP_cart2); // Save to File
