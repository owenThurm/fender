class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toJSON() {
    return {
      x: this.x,
      y: this.y,
    };
  }
}

export default Point;
