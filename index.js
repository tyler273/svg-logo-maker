const inquirer = require("inquirer");
const fs = require("fs");
const {Triangle, Circle, Square} = require("./lib/shapes");
const questions = [{
    type: "input",
    name: "text",
    message: "what type of text?",
    validate: (input) => {
        // console.log(input)
        if (input.length <= 3){
            return true
        }
    
        else {
            return "Input must be 3 characters or less!"
        }
    }
},
{
    type: "input",
    name: "text_color",
    message: "what type of text color?"
},
{
    type: "list",
    name: "shape",
    message: "what type of shape?",
    choices: ['circle', 'triangle', 'square']
},
{
    type: "input",
    name: "shape_color",
    message: "what type of shape color?"
}]

function init(){
    inquirer.prompt(questions).then((answers) => {
        let shape;
        switch (answers.shape){
            case "circle":
                shape = new Circle();
                break;
            case "triangle":
                shape = new Triangle();
                break;
            case "square":
                shape = new Square();
                break;
        }
        shape.setColor(`${answers.shape_color}`);
        console.log(answers)
        console.log(shape)
        // writeFile(answers)
    })
    
    
}
init();

function writeFile(answers){
    let textAnswer = answers.text;
    fs.writeFile("./samples/sample.svg", textAnswer, (err) => err ? console.error(err) : console.log("success"))

};