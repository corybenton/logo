const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./js/circle.js');
const Triangle = require('./js/triangle.js');
const Square = require('./js/square.js');

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
            message: 'What would you like the text color to be?',
            name: 'backgroundcolor'
        },
        {
            type: 'input',
            message: 'What would you like the background color to be?',
            name: 'fillcolor'
        },
    ])
        .then((response) => {
            if (response.name.length == 0 || response.name.length > 3) {
                throw new Error('Input must be greater than 0 and less than 3');
            }
            if (response.shape == "square") {
                return logoWrite = new Square(response.fillcolor, response.backgroundcolor, response.name).render();
            } else if (response.shape == "triangle") {
                return logoWrite = new Triangle(response.fillcolor, response.backgroundcolor, response.name).render();
            } else {
                return logoWrite = new Circle(response.fillcolor, response.backgroundcolor, response.name).render();
            }
        })
        .then((logoWrite) => {
            fs.writeFile("logo.svg", logoWrite, (err) => {
                if (err) { console.log(err); }
            })
        }
        )
}

initprompt();