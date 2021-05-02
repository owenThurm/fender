import React, { useState } from 'react';
import ComponentMenu from './ComponentMenu';
import Draggable from 'react-draggable';
import { copyBlock } from './utils';

export default ({ block, Component, editContent }) => {
  const [showStyleMenu, setShowStyleMenu] = useState(false);
  const [position, setPosition] = useState({
    x: block.positionX,
    y: block.positionY,
  })

  const blockPosition = {
    x: block.positionX,
    y: block.positionY,
  }

  const updatePosition = () => {
    let updatedBlock = copyBlock(block);
    const { x, y } = position;
    updatedBlock.positionX = x;
    updatedBlock.positionY = y;
    editContent(updatedBlock);
  }

  const handleDrag = (e, ui) => {
    setPosition(({ x, y }) => ({
      x: x + ui.deltaX,
      y: y + ui.deltaY
    }))
  }

  return(
    <>
      <Draggable position={null} defaultPosition={blockPosition} onDrag={handleDrag} onStop={updatePosition}>
        <div>
          <Component setShowStyleMenu={setShowStyleMenu} style={block.style}/>
        </div>
      </Draggable>
      <ComponentMenu editContent={editContent} block={block} setShowStyleMenu={setShowStyleMenu} visible={showStyleMenu}/>
    </>
  )
}