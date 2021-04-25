import { useState } from 'react';


export const copyBlock = (block) => ({
  _uid: block._uid,
  component: block.component,
  headline: block.headline,
  positionX: block.positionX,
  positionY: block.positionY,
  style: block.style,
});

export function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}