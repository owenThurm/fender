import React, { useState, useEffect } from 'react';
import ComponentMenu from './ComponentMenu';
import { Rnd } from 'react-rnd';
import { dimension, point } from './utils';

export default ({ block, Component, editContent }) => {
  const [showStyleMenu, setShowStyleMenu] = useState(false);
  const [position, setPosition] = useState({
    x: block.position.x,
    y: block.position.y,
  })
  const [size, setSize] = useState({
    width: block.size.width,
    height: block.size.height,
  })

  useEffect(() => {
    setPosition({
      x: block.position.x,
      y: block.position.y,
    })
    setSize(dimension(block.size.width, block.size.height))
  }, [block])

  const updatePosition = () => {
    const { x, y } = position;
    let updatedBlock = {
      ...block,
      position: point(x, y),
    }
    editContent(updatedBlock);
  }

  const handleDrag = (e, ui) => {
    setPosition(({ x, y }) => ({
      x: x + ui.deltaX,
      y: y + ui.deltaY
    }))
  }

  const updateSize = (e, direction, ref) => {
    console.log('stopping resizing...', ref.style.width)
    let updatedBlock = {
      ...block,
      size: dimension(ref.style.width, ref.style.height),
    }
    editContent(updatedBlock);
  }

  return(
    <>
      <Rnd
      onResizeStop={updateSize}
      size={size}
      position={position}
      onDrag={handleDrag}
      onDragStop={updatePosition}>
          <Component setShowStyleMenu={setShowStyleMenu} style={block.style}/>
      </Rnd>
      <ComponentMenu editContent={editContent} block={block} setShowStyleMenu={setShowStyleMenu} visible={showStyleMenu}/>
    </>
  )
}