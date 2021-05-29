import { v4 } from 'uuid';

class Block {
  constructor(props) {
    const {
      id = v4(),
      component,
      position,
      size,
      style,
    } = props;

    this.id = id;
    this.component = component;
    this.position = position;
    this.size = size;
    this.style = style;
  }

  toJSON() {
    return {
      id: this.id,
      component: this.component,
      position: this.position,
      size: this.size,
      style: this.style,
    };
  }
}

export default Block;
