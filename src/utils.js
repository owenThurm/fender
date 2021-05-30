import { useState } from 'react';

export const copyBlock = (block) => ({
  id: block.id,
  component: block.component,
  headline: block.headline,
  position: {
    x: block.position.x,
    y: block.position.y,
  },
  style: block.style,
});

export const dimension = (width, height) => ({ width, height });

export const point = (x, y) => ({ x, y });

export const useForceUpdate = () => {
  const [, setValue] = useState(0); // integer state
  return () => setValue((curValue) => curValue + 1); // update the state to force render
};
