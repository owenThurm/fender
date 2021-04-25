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

  const draggleRef = React.createRef();

  const updatePosition = (callback) => {
    console.log('CALLED UPDATE')
    let updatedBlock = copyBlock(block);
    const { x, y } = position;
    updatedBlock.positionX = x;
    updatedBlock.positionY = y;
    editContent(updatedBlock);
  }

  const handleDrag = (e, ui) => {
    console.log(ui.deltaX)
    setPosition(({ x, y }) => ({
      x: x + ui.deltaX,
      y: y + ui.deltaY
    }))
  }

  return(
    <>
      <Draggable defaultPosition={position} onDrag={handleDrag} onStop={updatePosition}>
        <div ref={draggleRef}>
          <Component setShowStyleMenu={setShowStyleMenu} style={block.style}/>
        </div>
      </Draggable>
      <ComponentMenu editContent={editContent} block={block} setShowStyleMenu={setShowStyleMenu} visible={showStyleMenu}/>
    </>
  )
}