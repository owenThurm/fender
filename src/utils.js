import { useState } from 'react';


export const copyBlock = (block) => ({
  _uid: block._uid,
  component: block.component,
  headline: block.headline,
  position: {
    x: block.position.x,
    y: block.position.y,
  },
  style: block.style,
});

export const dimension = (width, height) => ({width: width, height: height});

export const point = (x, y) => ({x: x, y: y});

export function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}