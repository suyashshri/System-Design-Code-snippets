abstract class LSP_Account2 {
  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;
}

class SavingAccount2 extends LSP_Account2 {
  private balance = 0;

  deposit(amount: number): void {
    this.balance += amount;
    console.log(
      `Deposited: ${amount} in Savings Account. New Balance: ${this.balance}`
    );
  }

  withdraw(amount: number): void {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(
        `Withdrawn: ${amount} from Savings Account. New Balance: ${this.balance}`
      );
    } else {
      console.log("Insufficient funds in Savings Account!");
    }
  }
}

class CurrentAccount2 extends LSP_Account2 {
  private balance = 0;

  deposit(amount: number): void {
    this.balance += amount;
    console.log(
      `Deposited: ${amount} in Current Account. New Balance: ${this.balance}`
    );
  }

  withdraw(amount: number): void {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(
        `Withdrawn: ${amount} from Current Account. New Balance: ${this.balance}`
      );
    } else {
      console.log("Insufficient funds in Current Account!");
    }
  }
}

class FixedTermAccount2 extends LSP_Account2 {
  private balance = 0;

  deposit(amount: number): void {
    this.balance += amount;
    console.log(
      `Deposited: ${amount} in Fixed Term Account. New Balance: ${this.balance}`
    );
  }

  withdraw(amount: number): void {
    throw new Error("Withdrawal not allowed in Fixed Term Account!");
  }
}

class BankClient2 {
  private accounts: LSP_Account2[];

  constructor(LSP_accounts: LSP_Account2[]) {
    this.accounts = LSP_accounts;
  }

  processTransaction(): void {
    for (const acc of this.accounts) {
      acc.deposit(1000);

      //Checking account type explicitly. This is wrong as exposing account to client side is not good.
      if (acc instanceof FixedTermAccount2) {
        console.log("Skipping withdrawal for Fixed Term Account.");
      } else {
        try {
          acc.withdraw(500);
        } catch (error: any) {
          console.log(`Exception: ${error.message}`);
        }
      }
    }
  }
}

const accounts2: LSP_Account2[] = [];

accounts2.push(new SavingAccount2());
accounts2.push(new CurrentAccount2());
accounts2.push(new FixedTermAccount2());

const client2 = new BankClient2(accounts2);
// will throw exception when withdrawing from FixedTermAccount
client2.processTransaction();
