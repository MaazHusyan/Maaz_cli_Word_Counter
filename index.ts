import inquirer from "inquirer";
let condition: boolean = true;

do {
  let answer = await inquirer.prompt([
    {
      name: "sentence",
      message: "Enter your para to count the words: => ",
      type: "input",
    },
  ]);
  let countWords = answer.sentence.trim().split(" ");
  console.log(countWords.length);
} while (condition);
