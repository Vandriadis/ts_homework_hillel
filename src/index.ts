// Створіть класи Circle, Rectangle, Square і Triangle.
// У кожного з них є загальнодоступний метод calculateArea.
// У кожної фігури є загальнодоступні властивості - колір і назва, які не можна змінювати після створення.
// У Square і Rectangle зі свого боку є ще додатковий метод print, який виводить рядок із формулою розрахунку площі
abstract class Shape {
  public readonly color: string;
  public readonly name: string;

  constructor(color: string, name: string) {
    this.color = color;
    this.name = name;
  }

  abstract calculateArea(): number;
}

class Circle extends Shape {
  private radius: number;

  constructor(color: string, radius: number) {
    super(color, 'Circle');
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  protected width: number;
  protected height: number;

  constructor(color: string, width: number, height: number) {
    super(color, 'Rectangle');
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  print(): void {
    // console.log(`Area of rectangle = width * height = ${this.width} * ${this.height}`);
  }
}

class Square extends Rectangle {
  constructor(color: string, sideLength: number) {
    super(color, sideLength, sideLength);
  }

  print(): void {
    // console.log(`Area of square = side * side = ${this.width} * ${this.width}`);
  }
}

class Triangle extends Shape {
  private base: number;
  private height: number;

  constructor(color: string, base: number, height: number) {
    super(color, 'Triangle');
    this.base = base;
    this.height = height;
  }

  calculateArea(): number {
    return 0.5 * this.base * this.height;
  }
}
