class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
    // Svg Circle Code
  class Circle extends Shape {
    render(text, textColor) {
      return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
    }
  }
  
    // Svg Triangle Code
  class Triangle extends Shape {
    render(text, textColor) {
      return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="0,200 300,200 150,0" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
    }
  }
  
    // Svg Square Code
  class Square extends Shape {
    render(text, textColor) {
      return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect x="50" width="200" height="200" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  