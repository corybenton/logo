const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./js/shape.js');
const Circle = require('./js/shape.js');
const Triangle = require('./js/shape.js');
const Square = require('./js/shape.js');
let logoWrite;

function initprompt() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What would you like on your logo (max 3 characters)?',
            name: 'name'
        },
        {
            type: 'list',
            message: 'Which shape do you want for your logo?',
            name: 'shape',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            message: 'What would you like the background color to be?',
            name: 'backgroundcolor'
        },
        {
            type: 'input',
            message: 'What would you like the text color to be?',
            name: 'fillcolor'
        },
    ])
        .then((response) => {
            //let newShape = new Shape(response.fillcolor, response.backgroundcolor, response.name);
            if (response.shape == "circle") {
                return newShape = new Circle(response.fillcolor, response.backgroundcolor, response.name);
            } else if (response.shape == "triangle") {
                newShape = new Triangle(response.fillcolor, response.backgroundcolor, response.name);
            } else {
                newShape = new Square(response.fillcolor, response.backgroundcolor, response.name);
            }
        })
        .then((newShape) => {
            console.log(newShape);
            console.log(newShape.fillcolor);
            const logoWrite = newShape.render();
            console.log(logoWrite);
            fs.writeFile("logo.svg", logoWrite, (err) => {
                if (err){console.log(err);}})
        }
        )
}

initprompt();