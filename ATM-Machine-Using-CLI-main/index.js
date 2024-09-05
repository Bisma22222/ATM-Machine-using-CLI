// ATM Machine using CLI typescript
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "userid",
        message: "Kindly Enter your Id:",
    },
    {
        type: "number",
        name: "userpin",
        message: "Kindly Enter your Pin:",
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select your account type:"
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["FastCash", "Withdraw"],
        message: "Select your transaction type:",
        when(answer) {
            return answer.accountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: ["1000", "2000", "10000", "20000"],
        message: "Select your amount:",
        when(answer) {
            return answer.transactionType == "FastCash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount:",
        when(answer) {
            return answer.transactionType == "Withdraw";
        },
    },
]);
if (answer.userid && answer.userpin) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log(balance);
    const Enteredamount = answer.amount;
    if (balance >= Enteredamount) {
        const remaining = balance - Enteredamount;
        console.log("Your remaining balance is", remaining);
    }
    else {
        console.log("Insufficient balance");
    }
}
