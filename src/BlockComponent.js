import React, { useState, useEffect } from 'react';
import ComponentMenu from './ComponentMenu';
import { dimension, point } from './utils';
import Moveable from 'react-moveable';

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
  const [target, setTarget] = React.useState();
  const [frame, setFrame] = React.useState({
      translate: [0,0],
  });
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

  const updateSize = () => {
    console.log('update size called')
  }

  const onDrag = e => {
    setPosition(({x, y}) => ({
      x: x + e.beforeDelta[0],
      y: y + e.beforeDelta[1],
    }));
  }

  return(
    <>
      <div className="container">
        <Component position={position} size={size} className={`${'a' + block._uid}`} setShowStyleMenu={setShowStyleMenu} style={block.style}/>

        <Moveable
            target={target}
            draggable={true}
            resizable={true}
            snappable={true}
            elementGuidelines={elementGuidelines}
            throttleDrag={0}
            startDragRotate={0}
            throttleDragRotate={0}
            zoom={1}
            origin={true}
            padding={{"left":0,"top":0,"right":0,"bottom":0}}
            onDrag={onDrag}
            onDragEnd={updatePosition}
            onResizeStart={e => {
              e.setOrigin(["%", "%"]);
              e.dragStart && e.dragStart.set(frame.translate);
            }}
            onResize={e => {
                const beforeTranslate = e.drag.beforeTranslate;
                frame.translate = beforeTranslate;
                e.target.style.width = `${e.width}px`;
                e.target.style.height = `${e.height}px`;
                e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
            }}
            onResizeEnd={updateSize}
        />
      </div>
      <ComponentMenu editContent={editContent} block={block} setShowStyleMenu={setShowStyleMenu} visible={showStyleMenu}/>
    </>
  )
}