const inquirer = require('inquirer');
const Circle = require('../js/circle.js');
const Triangle = require('../js/triangle.js');
const Square = require('../js/square.js');

describe('Prompt', () => {
    describe('Initialize initials', () => {
        it('should set name variable properly', () => {
            const name = 'AAA';
            const shape = new Circle("blue", "black", name);
            expect(shape.initials).toBe(name);
        });
    });

    describe('Initialize textcolor', () => {
        it('should set textcolor properly', () => {
            const color = 'blue';
            const triangle = new Triangle("blue", "black", "AAA");
            expect(triangle.textcolor).toBe(color);
        });
    });
    
    describe('Initialize background color', () => {
        it('should set background color properly', () => {
            const color = 'black';
            const square = new Square("blue", "black", "AAA");
            expect(square.backcolor).toBe(color);
        });
    });
})
