import React, { useState, useEffect } from 'react';
import ComponentMenu from './ComponentMenu';
import { Rnd } from 'react-rnd';
import { dimension, point } from './utils';

export default ({ block, Component, editContent, content }) => {
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
    console.log("WIDTH");
    console.log(block.size.width);
  }, [block])

  const updatePosition = () => {
    const { x, y } = position;
    let updatedBlock = {
      ...block,
      position: point(x, y),
    }
    editContent(updatedBlock);


    // Check for overlap of any two elements
    for(var i = 0; i < content.length; i++){
      for(var j = i + 1; j < content.length; j++) {

        if (
          (Math.abs(content[i].position.x - content[j].position.x) < 30) && 
          (Math.abs(content[i].position.y - content[j].position.y) < 30)
          ) {
          console.log("HOLY, TWO ELEMENTS OVERLAP");
        }

      }
    }

  }

  const handleDrag = (e, ui) => {
    //console.log(ui);
    setPosition(({ x, y }) => ({
      x: x + ui.deltaX,
      y: y + ui.deltaY
    }))
    
  }

  const updateSize = (e, direction, ref, delta) => {
    console.log('stopping resizing...', ref.style.width)
    console.log(e);
    console.log(direction);
    
   
    console.log("DELTA: ", delta);
    let newX = block.position.x;
    let newY = block.position.y;
    if (direction == "left") {
      newX = block.position.x - delta.width;
    }

    else if (direction == "top") {
      newY = block.position.y - delta.height;
    }

    let updatedBlock = {
      ...block,
      size: dimension(ref.style.width, ref.style.height),
      position: {x: newX, y: newY},
       
    }
    console.log("UPDATED BLOCK POSITION:", updatedBlock.position.x, updatedBlock.position.y);
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