const inquirer = require('inquirer');
const fs = require('fs');

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