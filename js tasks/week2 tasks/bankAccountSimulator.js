function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            if (amount > 0) {
                balance += amount;
                console.log("Deposited:", amount);
            } else {
                console.log("Invalid deposit amount");
            }
        },

        withdraw(amount) {
            if (amount <= 0) {
                console.log("Invalid withdrawal amount");
            } else if (amount > balance) {
                console.log("Insufficient balance!");
            } else {
                balance -= amount;
                console.log("Withdrawn:", amount);
            }
        },

        checkBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(1000);

account.deposit(500);
account.withdraw(200);

console.log(account.checkBalance()); 