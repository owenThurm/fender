class Dimension {
  constructor(props) {
    const { width, height } = props;

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
