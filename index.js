const inquirer = require('inquirer');
const fs = require('fs');
const shape = require('./js/shape.js');
const change = require('./js/modify.js')

class Logo {
    initprompt() {
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
                const newShape = new shape(response.fillcolor, response.backgroundcolor, response.name, response.shape);
                const shapeFile = shape.render();
                const logoWrite = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Logo</title>
                    <link rel="stylesheet" href="./css/style.css">
                    </head>
                    <body>
                        ${shapeFile}
                        <script src="js/modify.js"></script>
                    </body>
                </html>`;
                fs.writeFile('logo.html', logoWrite, (err) => console.log(err));
                change.modify();
            })
    }
}

Logo.initprompt();