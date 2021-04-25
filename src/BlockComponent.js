import React, { useState } from 'react';
import ComponentMenu from './ComponentMenu';
import Draggable from 'react-draggable';
import { copyBlock } from './utils';

export default ({ block, Component, editContent }) => {
  const [showStyleMenu, setShowStyleMenu] = useState(false);
  const [position, setPosition] = useState({
    positionX: block.positionX,
    positionY: block.positionY,
  })
  console.log('update here');

  const draggleRef = React.createRef();

  const updatePosition = () => {
    console.log('####Called update position!!', position);
    let updatedBlock = copyBlock(block);
    console.log('updated block', updatedBlock, 'old block', block);
    const { positionX, positionY } = position;
    updatedBlock.positionX = positionX;
    updatedBlock.positionY = positionY;
    console.log('updated block AGAIN', updatedBlock, 'old block AGAIN', block);
    //editContent(updatedBlock);
  }

  const handleDrag = (e, ui) => {
    setPosition(({ positionX, positionY }) => ({
      positionX: positionX + ui.deltaX,
      positionY: positionY + ui.deltaY
    }))
  }
  console.log('ren  dering block at position: ', [block.positionX, block.positionY])
  return(
    <>
      <Draggable onDrag={handleDrag} onStop={updatePosition}>
        <div ref={draggleRef}>
          <Component setShowStyleMenu={setShowStyleMenu} x={block.positionX} y={block.positionY} style={block.style}/>
        </div>
      </Draggable>
      <ComponentMenu editContent={editContent} block={block} setShowStyleMenu={setShowStyleMenu} visible={showStyleMenu}/>
    </>
  )
}