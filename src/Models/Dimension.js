class Dimension {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toJSON() {
    return {
      width: this.width,
      height: this.height,
    };
  }
}

export default Dimension;
