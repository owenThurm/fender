import React, { useState, useEffect } from 'react';
import Moveable from 'react-moveable';
import ComponentMenu from './ComponentMenu';
import { dimension, point } from './utils';

export default ({ block, Component, editContent, content }) => {
  const [showStyleMenu, setShowStyleMenu] = useState(false);
  const [position, setPosition] = useState({
    x: block.position.x,
    y: block.position.y,
  })
  const [size, setSize] = useState(block.size)
  const [showMoveable, setShowMoveAble] = useState(false);
  const [target, setTarget] = React.useState();
  const [elementGuidelines, setElementGuidelines] = React.useState([]);
  React.useEffect(() => {
      setTarget(document.querySelector(`.${'a' + block._uid}`));
      let elements = [];
      content.forEach(({ _uid }) => {
        if(_uid !== block._uid) {
          elements.push(document.querySelector(`.${'a' + _uid}`))
        }
      })
      setElementGuidelines(elements);
  }, []);

  const updatePosition = () => {
    const { x, y } = position;
    let updatedBlock = {
      ...block,
      position: point(x, y),
    }
    editContent(updatedBlock);
  }

  const updateSize = () => {
    let updatedBlock = {
      ...block,
      size: size,
      position: position,
    }
    editContent(updatedBlock);
  }

  const onDrag = e => {
    setPosition(({x, y}) => ({
      x: x + e.beforeDelta[0],
      y: y + e.beforeDelta[1],
    }));
  }

  const onResize = ({ direction, delta }) => {

    const deltaX = delta[0]
    const deltaY = delta[1]

    setSize(({ width, height }) => dimension(width + deltaX, height + deltaY));
    if(direction[0] === -1 && direction[1] === -1) {
      setPosition(({x, y}) => point(x - deltaX, y - deltaY));
    } else if(direction[0] === -1 && direction[1] === 1) {
      setPosition(({x, y}) => point(x - deltaX, y));
    } else if (direction[0] === 1 && direction[1] === -1) {
      setPosition(({x, y}) => point(x, y - deltaY));
    }
  }

  return(
    <>
      <div className="container">
        <Component
          setShowMoveable={setShowMoveAble}
          position={position}
          size={size}
          className={`${'a' + block._uid}`}
          setShowStyleMenu={setShowStyleMenu}
          style={block.style}
        />

        {showMoveable ? <Moveable
            target={target}
            draggable={true}
            resizable={true}
            snappable={true}
            origin={false}
            elementGuidelines={elementGuidelines}
            horizontalGuidelines={[410]}
            verticalGuidelines={[410]}
            snapCenter={true}
            throttleDrag={0}
            bounds={{"left":20,"top":0,"right":820,"bottom":820}}
            startDragRotate={0}
            throttleDragRotate={0}
            zoom={1}
            padding={{"left":0,"top":0,"right":0,"bottom":0}}
            onDrag={onDrag}
            onDragEnd={updatePosition}
            onResize={onResize}
            onResizeEnd={updateSize}
        /> : ''}
      </div>
      <ComponentMenu editContent={editContent} block={block} setShowStyleMenu={setShowStyleMenu} visible={showStyleMenu}/>
    </>
  )
}