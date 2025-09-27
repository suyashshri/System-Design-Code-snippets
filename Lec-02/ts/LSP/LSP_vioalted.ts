abstract class LSP_Account1 {
  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;
}

class SavingAccount1 extends LSP_Account1 {
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

class CurrentAccount1 extends LSP_Account1 {
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

class FixedTermAccount1 extends LSP_Account1 {
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

class BankClient {
  private accounts: LSP_Account1[];

  constructor(LSP_accounts: LSP_Account1[]) {
    this.accounts = LSP_accounts;
  }

  processTransaction(): void {
    for (const acc of this.accounts) {
      // All accounts are allow to make deposits
      acc.deposit(1000);

      //Assuming all accounts support withdrawal (LSP Violation)
      try {
        acc.withdraw(500);
      } catch (error) {
        console.log(`Exception: ${error}`);
      }
    }
  }
}

const accounts: LSP_Account1[] = [];

accounts.push(new SavingAccount1());
accounts.push(new CurrentAccount1());
accounts.push(new FixedTermAccount1());

const client = new BankClient(accounts);
// will throw exception when withdrawing from FixedTermAccount
client.processTransaction();
