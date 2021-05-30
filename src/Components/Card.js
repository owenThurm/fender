import { Card } from 'antd';
import React from 'react';
import { componentPropTypes, componentDefaultProps } from '../Types/Types';

export const CardComponent = ({
  className,
  position: { x, y },
  size: { width, height },
  style,
  setShowStyleMenu,
  setShowMoveable,
}) => (
  <Card
    className={className}
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width,
      height,
      ...style,
    }}
    onClick={() => {
      setShowMoveable(true);
    }}
    onDoubleClick={() => {
      setShowStyleMenu(true);
    }}
  >
    This is a card
  </Card>
);

CardComponent.propTypes = componentPropTypes;

CardComponent.defaultProps = componentDefaultProps;

export default CardComponent;
