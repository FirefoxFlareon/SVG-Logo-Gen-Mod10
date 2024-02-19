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
]
