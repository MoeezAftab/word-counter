import inquirer from "inquirer"

let user_ans = await inquirer.prompt({
    type: "input",
    name: "words",
    message: "Please Enter Your Sentance"
})

let word_count = user_ans.words.trim().split(" ").length

console.log(`your sentence has ${word_count} words. `);
