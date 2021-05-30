import React, { useState } from 'react';
import Moveable from 'react-moveable';
import PropTypes from 'prop-types';
import ComponentMenu from './ComponentMenu';
import { dimension, point } from './utils';
import Block from './Models/Block';

const propTypes = {
  block: PropTypes.instanceOf(Block).isRequired,
  Component: PropTypes.func.isRequired,
  editContent: PropTypes.func.isRequired,
  content: PropTypes.arrayOf(
    PropTypes.instanceOf(Block),
  ).isRequired,
};

const BlockComponent = ({
  block,
  Component,
  editContent,
  content,
}) => {
  const { id: blockId, position: blockPosition, size: blockSize } = block;
  const [showStyleMenu, setShowStyleMenu] = useState(false);
  const [position, setPosition] = useState({
    x: blockPosition.x,
    y: blockPosition.y,
  });
  const [size, setSize] = useState(blockSize);
  const [showMoveable, setShowMoveAble] = useState(false);
  const [target, setTarget] = React.useState();
  const [elementGuidelines, setElementGuidelines] = React.useState([]);
  React.useEffect(() => {
    setTarget(document.querySelector(`.a${blockId}`));
    const elements = [];
    content.forEach(({ id }) => {
      if (id !== blockId) {
        elements.push(document.querySelector(`.a${blockId}`));
      }
    });
    setElementGuidelines(elements);
  }, []);

  const updatePosition = () => {
    const { x, y } = position;
    block.setPosition(x, y);
  };

  const updateSize = () => {
    const { width, height } = size;
    block.setSize(width, height);
  };

  const onDrag = (e) => {
    setPosition(({ x, y }) => ({
      x: x + e.beforeDelta[0],
      y: y + e.beforeDelta[1],
    }));
  };

  const onResize = ({ direction, delta }) => {
    const deltaX = delta[0];
    const deltaY = delta[1];

    setSize(({ width, height }) => dimension(width + deltaX, height + deltaY));
    if (direction[0] === -1 && direction[1] === -1) {
      setPosition(({ x, y }) => point(x - deltaX, y - deltaY));
    } else if (direction[0] === -1 && direction[1] === 1) {
      setPosition(({ x, y }) => point(x - deltaX, y));
    } else if (direction[0] === 1 && direction[1] === -1) {
      setPosition(({ x, y }) => point(x, y - deltaY));
    }
  };

  return (
    <>
      <div className="container">
        <Component
          setShowMoveable={setShowMoveAble}
          position={position}
          size={size}
          className={`a${block.id}`}
          setShowStyleMenu={setShowStyleMenu}
          style={block.style}
        />

        {showMoveable ? (
          <Moveable
            target={target}
            draggable
            resizable
            snappable
            origin={false}
            elementGuidelines={elementGuidelines}
            horizontalGuidelines={[410]}
            verticalGuidelines={[410]}
            snapCenter
            throttleDrag={0}
            bounds={{
              left: 20,
              top: 0,
              right: 820,
              bottom: 820,
            }}
            startDragRotate={0}
            throttleDragRotate={0}
            zoom={1}
            padding={{
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
            }}
            onDrag={onDrag}
            onDragEnd={updatePosition}
            onResize={onResize}
            onResizeEnd={updateSize}
          />
        ) : ''}
      </div>
      <ComponentMenu
        editContent={editContent}
        block={block}
        setShowStyleMenu={setShowStyleMenu}
        visible={showStyleMenu}
      />
    </>
  );
};

BlockComponent.propTypes = propTypes;

export default BlockComponent;
