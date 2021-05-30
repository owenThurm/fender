import { v4 } from 'uuid';
import Dimension from './Dimension';
import Point from './Point';

class Block {
  constructor(component, position, size, style) {
    this.id = v4();
    this.component = component;
    this.position = position;
    this.size = size;
    this.style = style;
  }

  setPosition(x, y) {
    this.position = new Point(x, y);
  }

  setSize(width, height) {
    this.size = new Dimension(width, height);
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
