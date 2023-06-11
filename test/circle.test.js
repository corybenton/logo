const Circle = require('../js/circle.js');

describe('Circle', () => {
  describe('render', () => {
    it('should return blue for text color, black for background color, and AAA for initials', () => {
        const shape = new Circle;
        shape.textcolor = "black";
        shape.backcolor = "blue";
        shape.initials = "AAA";
        expect(shape.render()).toEqual(
            '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">' + "\n" + 
            '<circle cx="150" cy="100" r="80" fill="blue"></circle>' + "\n" + 
            '<text x="150" y="125" font-size="70" font-family="monospace" text-anchor="middle" fill="black">AAA</text>' + "\n" +
            '</svg>');
    });
  });
})
