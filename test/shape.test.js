const Shape = require('../js/shape.js');

describe('triangle', () => {
  describe('textcolor', () => {
    it('should return blue for text color', () => {
        const shape = new Shape;
        shape.textcolor = "blue";
        expect(shape.textcolor).toEqual("blue")
    });
  });
  describe('backcolor', () => {
    it('should return black for background color', () => {
        const shape = new Shape;
        shape.backcolor = "black";
        expect(shape.backcolor).toEqual("black")
    });
  });
  describe('initials', () => {
    it('should return AAA for initials', () => {
        const shape = new Shape;
        shape.initials = "AAA";
        expect(shape.initials).toEqual("AAA")
    });
  });
})