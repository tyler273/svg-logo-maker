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
        let textColor = answers.text_color;
        let text = answers.text;
        let svgCode = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
            <text x="127" y="115" font-size="1.5em" fill="${textColor}">${text}</text>
        </svg>`;
        console.log(svgCode)
        writeFile(`./examples/${answers.shape}.svg`, svgCode);
        // writeFile("sample.svg", svgCode);
    });
};
init();

function writeFile(sample, render){
    let textAnswer = render;
    fs.writeFile(sample, textAnswer, (err) => err ? console.error(err) : console.log("success"))
};