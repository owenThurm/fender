import { Button } from 'antd';
import React from 'react';
import { componentPropTypes, componentDefaultProps } from '../Types/Types';

const ButtonComponent = ({
  className,
  position: { x, y },
  size: { width, height },
  setShowStyleMenu,
  setShowMoveable,
  style,
}) => (
  <Button
    className={className}
    style={{
      position: 'absolute',
      left: x,
      top: y,
      height,
      width,
      ...style,
    }}
    onClick={() => {
      setShowMoveable(true);
    }}
    onDoubleClick={() => setShowStyleMenu(true)}
  >
    Click Me
  </Button>
);

ButtonComponent.propTypes = componentPropTypes;

ButtonComponent.defaultProps = componentDefaultProps;

export default ButtonComponent;
