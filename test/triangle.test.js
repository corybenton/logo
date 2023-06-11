const Triangle = require('../js/triangle.js');

describe('triangle', () => {
  describe('render', () => {
    it('should return blue for text color, black for background color, and AAA for initials', () => {
        const shape = new Triangle;
        shape.textcolor = "black";
        shape.backcolor = "blue";
        shape.initials = "AAA";
        expect(shape.render()).toEqual(
            '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">' + "\n" + 
            '<polygon points="70,180 230,180 150,20" fill="blue"></polygon>' + "\n" + 
            '<text x="150" y="175" font-size="70" font-family="monospace" text-anchor="middle" fill="black">AAA</text>' + "\n" +
            '</svg>');
    });
  });
})
