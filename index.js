const fs = require('fs');
const inquirer = require('inquirer')
const { Square, Circle, Triangle } = require('./lib/shapes')

const logoData = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter 3 characters for your logo!'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color! (hex # or color name)'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Which shape would you like for your logo?',
        choices: ['Square', 'Circle', 'Triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color! (hex # or color name)'
    }
];

function generateSVG(shape, textColor, text, shapeColor) {
    let shapeSVG = '';

    switch (shape) {
        case 'Square':
            const square = new Square();
            square.setColor(shapeColor);
            shapeSVG = square.render();
            break;
        case 'Circle':
            const circle = new Circle();
            circle.setColor(shapeColor);
            shapeSVG = circle.render();
            break;
        case 'Triangle':
            const triangle = new Triangle();
            triangle.setColor(shapeColor);
            shapeSVG = triangle.render();
            break;
    }

    const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeSVG}<text fill="${textColor}" x="150" y="105" dominant-baseline="middle" text-anchor="middle" font-size="50">${text}</text></svg>`;

    return svgContent;
};

async function run() {
    try {
        const answers = await inquirer.prompt(logoData);

        const svgContent = generateSVG(answers.shape, answers.textColor, answers.text, answers.shapeColor);

        fs.writeFileSync('logo.svg', svgContent);

        console.log('Your logo has been made!');
    } catch (error) {
        console.error('Error', error);
    }
}

run();