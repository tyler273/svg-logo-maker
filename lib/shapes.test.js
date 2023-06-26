const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle", () => {
  test("should render blue triangle", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

describe("Circle", () => {
  test("should render a red circle", () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="80" fill="red" />'
    );
  });
});

describe("Square", () => {
  test("should render a green square", () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      `<rect x="80" y="50" width="45%" height="60%" fill="green" />`
    );
  });
});