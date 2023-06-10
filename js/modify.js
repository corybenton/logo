const Shape = require('./shape.js');
const document = ('logo.html');
const textColor = document.getElementById("text");
const backgColor = document.getElementById("shape");
const logoName = document.getElementById("text").innerHTML;

class ModifyShape extends Shape {
    modify() {
        textColor.setAttribute("fill") = this.fillcolor;
        backgColor.setAttribute("fill") = this.backcolor;
        logoName.innerHTML = this.initials;
    }
}

module.exports = ModifyShape;