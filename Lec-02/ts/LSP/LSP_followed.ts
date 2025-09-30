abstract class DepositsOnlyAccount {
  abstract deposit(amount: number): void;
}

abstract class WithdrawableAccount extends DepositsOnlyAccount {
  abstract withdraw(amount: number): void;
}

class SavingAccount extends WithdrawableAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
    console.log(
      `Deposited: ${amount} in Savings Account. New Balance ${this.balance}`
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

class CurrentAccount extends WithdrawableAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
    console.log(
      `Deposited: ${amount} in Current Account. New Balance ${this.balance}`
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

class FixedDepositAccount extends DepositsOnlyAccount {
  private balance: number = 0;
  deposit(amount: number): void {
    this.balance += amount;
    console.log(
      `Deposited: ${amount} in FD Account. New Balance ${this.balance}`
    );
  }
}

class BankClient3 {
  private depositsOnlyAccounts: DepositsOnlyAccount[];
  private withdrawAccounts: WithdrawableAccount[];

  constructor(
    DOAccounts: DepositsOnlyAccount[],
    WAccounts: WithdrawableAccount[]
  ) {
    this.depositsOnlyAccounts = DOAccounts;
    this.withdrawAccounts = WAccounts;
  }

  processTransaction(): void {
    for (const acc of this.withdrawAccounts) {
      acc.deposit(1000);
      acc.withdraw(500);
    }
    for (const acc of this.depositsOnlyAccounts) {
      acc.deposit(1000);
    }
  }
}

const WAccounts: WithdrawableAccount[] = [];
const DOAccounts: DepositsOnlyAccount[] = [];

WAccounts.push(new SavingAccount());
WAccounts.push(new CurrentAccount());
DOAccounts.push(new FixedDepositAccount());

const client3 = new BankClient3(DOAccounts, WAccounts);
client3.processTransaction();
