import { Input } from 'antd';
import React from 'react';
import { componentPropTypes, componentDefaultProps } from '../Types/Types';

const InputComponent = ({
  className,
  position: { x, y },
  size: { width, height },
  setShowStyleMenu,
  setShowMoveable,
  style,
}) => (
  <Input
    className={className}
    style={{
      position: 'absolute',
      left: x,
      top: y,
      height,
      width,
      ...style,
    }}
    placeholder="input here"
    onClick={() => setShowMoveable(true)}
    onDoubleClick={() => setShowStyleMenu(true)}
  />
);

InputComponent.propTypes = componentPropTypes;

InputComponent.defaultProps = componentDefaultProps;

export default InputComponent;
