class Point {
  constructor(props) {
    const { x, y } = props;

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
