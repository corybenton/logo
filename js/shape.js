const fs = require('fs');

class Shape {
    constructor(fillcolor, backcolor, initials, shape) {
        this.fillcolor = fillcolor;
        this.backcolor = backcolor;
        this.initials = initials;
        this.shapePath = `./assets/${shape}.svg`;
    }
    render() {
        fs.readFile(this.shapePath, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                const renderedShape = data;
                return renderedShape;
            }
        })
    }
}


module.exports = Shape;