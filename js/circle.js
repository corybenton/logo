const Shape = require('./shape.js');

class Circle extends Shape {
    constructor(textcolor, backcolor, initials) {
        super(textcolor, backcolor, initials);
    }
    render() {
        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
                <circle cx="150" cy="100" r="80" fill="${this.backcolor}"></circle>
        
                <text x="150" y="125" font-size="70" font-family="monospace" text-anchor="middle" fill="${this.textcolor}">${this.initials}</text>
        
            </svg>`;
    }
}

module.exports = Circle;