const inquirer = require("inquirer");
const fs = require("fs");
const {Triangle, Circle, Square} = require("./lib/shapes");
class SVG {
    constructor(textAnswer, shapeAnswer) {
        this.textAnswer = textAnswer;
        this.shapeAnswer = shapeAnswer;
    }
    render() {
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${this.textAnswer}

        ${this.shapeAnswer}
        </svg>`
    }
    setShape(shape) {
        this.shapeAnswer = shape.render();
    }
    setText(text, textColor) {
        this.textAnswer = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
    }
}
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
        // console.log(answers)
        // console.log(shape)
        let logo = new SVG();
        logo.setShape(shape);
        logo.setText(answers.text, answers.text_color);
        console.log(logo)
        let test = logo.render();
        console.log(test)
        // writeFile("sample.svg", logo.render())
    })
    
    
}
init();

function writeFile(sample, render){
    let textAnswer = render;
    fs.writeFile(sample, textAnswer, (err) => err ? console.error(err) : console.log("success"))

};