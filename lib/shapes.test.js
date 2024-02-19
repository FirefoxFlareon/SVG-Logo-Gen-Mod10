const { Square, Circle, Triangle } = require('./shapes');

describe("Square", () => {
    test("correct render and color", () => { 
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="blue" />')
    })
});

describe("Circle", () => {
    test("correct render and color", () => { 
        const shape = new Circle();
        shape.setColor("yellow");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="50" fill="yellow" />')
    })
});

describe("Triangle", () => {
    test("correct render and color", () => { 
        const shape = new Triangle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<polygon points="150,5 10,150 300,150" fill="red" />')
    })
});
