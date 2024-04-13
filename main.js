import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "firstNumber",
        message: "Enter your first number",
        type: "number"
    },
    {
        name: "secondNumber",
        message: "Enter your second number",
        type: "number"
    },
    {
        name: "operator",
        message: "Enter your operation",
        type: "list",
        choices: ["Addition", "subtraction", "Multiplication", "Division"]
    },
]);
// conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select the valid operator");
}
