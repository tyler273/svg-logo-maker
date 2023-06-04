const inquirer = require("inquirer");
const fs = require("fs");
const questions = [{
    type: "input",
    name: "logo",
    message: "what type of logo?"
}]

function init(){
    inquirer.prompt(questions).then((answers) => writeFile(answers))
}
init();

function writeFile(answers){
    let logoAnswer = answers.logo;
    fs.writeFile("./samples/sample.svg", logoAnswer, (err) => err ? console.error(err) : console.log("success"))
};