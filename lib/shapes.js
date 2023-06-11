class Shapes {
    constructor(fill) {
        this.fill = fill;
    }
    setColor(fill) {
        this.fill = fill;
    }
};

class Triangle extends Shapes {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.fill}" />`
    }
};

class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.fill}" />`
    }
};

class Square extends Shapes {
    render () {
        return `<rect width="100%" height="100%" fill="${this.fill}" />`
    }
};

module.exports = {
    Triangle, Circle, Square
};