import { Input } from 'antd';
import React from 'react';
import { componentPropTypes, componentDefaultProps } from '../Types/Types';

export default ({ className, position, size, setShowStyleMenu, setShowMoveable, style }) => (
<Input
  className={className}
  style={{position: 'absolute', left: position.x, top: position.y, height: size.height, width: size.width, ...style}}
  placeholder='input here'
  onClick={() => setShowMoveable(true)}
  onDoubleClick={() => setShowStyleMenu(true)}
  />
)

