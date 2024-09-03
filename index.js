#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.yellow("=".repeat(70)));
console.log(chalk.yellow("\n \t        Welcome to our Guessing Game     \n"));
console.log(chalk.bold.yellow("=".repeat(70)));
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: chalk.blue.bold("Please guess a number between 1 to 10")
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log(chalk.green("Congratulations!, You have guessed a right number"));
}
else {
    console.log(chalk.red("You have guessed a wrong number"));
}
