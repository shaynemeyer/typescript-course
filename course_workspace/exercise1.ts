type BankAccount = { money: number, deposit: (val: number) => void };

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

let myself: { name: string, bankAccount: BankAccount, hobbies: string[] } = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

const multiplyNumbers = (number1: number, number2: number) => {
    return number1 * number2;
}

console.log(multiplyNumbers(2, 10));