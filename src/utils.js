import cloneDeep from 'lodash';


export const copyBlock = (block) => ({
  _uid: block._uid,
  component: block.component,
  headline: block.headline,
  positionX: block.positionX,
  positionY: block.positionY,
  style: block.style,
});