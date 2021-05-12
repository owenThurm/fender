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
          (Math.abs(content[i].position.x - content[j].position.x) < 80) && 
          (Math.abs(content[i].position.y - content[j].position.y) < 80)
          ) {
          console.log("HOLY, TWO ELEMENTS OVERLAP");
        }

      }
    }

  }

  const handleDrag = (e, ui) => {
    //console.log(ui);
    //console.log(document.querySelector(".outside").getBoundingClientRect())
    let boundingRect = document.querySelector(".outside").getBoundingClientRect()
    console.log("SIZE:",size);
    console.log("POSITION:",position);
    if (position.x < 0) {
      setPosition({x:0, y:position.y});
      return
    }

    else if (position.y < 0) {
      setPosition({x: position.x, y: 0});
      return
    }

    else if (position.x + size.width > boundingRect.width) {
      console.log("NRDJKnjesfbjehbfahbhabsehfh");
      setPosition({x: boundingRect.width - size.width, y: position.y});
      return
    }

    else if (position.y + size.height > boundingRect.height) {
      setPosition({x: position.x, y: boundingRect.height - size.height});
      return
    }

    


    setPosition(({ x, y }) => {
      return ({   
      x: x + ui.deltaX,
      y: y + ui.deltaY
      })
    });
  
  }

  const updateSize = (e, direction, ref, delta) => {
    //console.log(ref);
    //console.log('stopping resizing...', ref.style.width)
    setSize({width: parseInt(ref.style.width), height: parseInt(ref.style.height)});
    //console.log(e);
    //console.log(direction);
    
   
    console.log("DELTA: ", delta);
    let newX = block.position.x;
    let newY = block.position.y;
    if (direction == "left") {
      newX = block.position.x - delta.width;
    }

    else if (direction == "top") {
      newY = block.position.y - delta.height;
    }

    else if (direction == "topLeft") {
      newX = block.position.x - delta.width;
      newY = block.position.y - delta.height;
    }

    else if (direction == "topRight") {
      newY = block.position.y - delta.height;
    }

    else if (direction == "bottomLeft") {
      newX = block.position.x - delta.width;
    }


    let updatedBlock = {
      ...block,
      size: dimension(parseInt(ref.style.width), parseInt(ref.style.height)),
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