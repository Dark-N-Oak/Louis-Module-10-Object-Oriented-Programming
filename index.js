const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function getUserInput() {
  const userInput = {};

  // Prompt user for text input
  const { text } = await inquirer.prompt({
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo text:'
  });
  userInput.text = text.slice(0, 3);

  // Prompt user for text color
  const { textColor } = await inquirer.prompt({
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (keyword or hexadecimal):'
  });
  userInput.textColor = textColor;

  // Prompt user for shape
  const { shape } = await inquirer.prompt({
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['Circle', 'Triangle', 'Square']
  });
  userInput.shape = shape;

  // Prompt user for shape color
  const { shapeColor } = await inquirer.prompt({
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (keyword or hexadecimal):'
  });
  userInput.shapeColor = shapeColor;

  return userInput;
}

async function generateLogo() {
  try {
    const userInput = await getUserInput();
    let shape;

    switch (userInput.shape) {
      case 'Circle':
        shape = new Circle();
        break;
      case 'Triangle':
        shape = new Triangle();
        break;
      case 'Square':
        shape = new Square();
        break;
      default:
        console.log('Invalid shape');
        return;
    }

    shape.setColor(userInput.shapeColor);

    const svgContent = shape.render(userInput.text, userInput.textColor);

    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
  } catch (err) {
    console.error('Error:', err);
  }
}

generateLogo();
