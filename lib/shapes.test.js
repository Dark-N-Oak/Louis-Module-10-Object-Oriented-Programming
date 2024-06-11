const { Circle, Triangle, Square } = require('./shapes');

  // Test for Circle Render
test('Circle render', () => {
  const circle = new Circle();
  circle.setColor('blue');
  expect(circle.render('ABC', 'white')).toEqual('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ABC</text></svg>');
});

  // Test for Triangle Render
test('Triangle render', () => {
  const triangle = new Triangle();
  triangle.setColor('red');
  expect(triangle.render('XYZ', 'black')).toEqual('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="0,200 300,200 150,0" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">XYZ</text></svg>');
});

  // Test for Square Render
test('Square render', () => {
  const square = new Square();
  square.setColor('green');
  expect(square.render('123', 'yellow')).toEqual('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect x="50" width="200" height="200" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">123</text></svg>');
});
