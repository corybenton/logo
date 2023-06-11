const Shape = require('./shape.js');

class Triangle extends Shape {
    constructor(textcolor, backcolor, initials) {
        super(textcolor, backcolor, initials);
    }
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <polygon points="70,180 230,180 150,20" fill="${this.backcolor}"></polygon>

            <text x="150" y="175" font-size="70" font-family="monospace" text-anchor="middle" fill="${this.textcolor}">${this.initials}</text>
  
        </svg>`
    }
}

module.exports = Triangle;