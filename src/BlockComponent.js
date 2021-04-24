import React, { useState } from 'react';
import ComponentMenu from './ComponentMenu';
import Draggable from 'react-draggable';

export default ({ block, Component, editContent }) => {
  const [showStyleMenu, setShowStyleMenu] = useState(false);
  const [bounds, setBounds] = useState({ left: block.positionX, top: block.positionY });

  const draggleRef = React.createRef();

  const onStart = (event, uiData) => {
    const { clientWidth, clientHeight } = window?.document?.documentElement;
    const targetRect = draggleRef?.current?.getBoundingClientRect();
    setBounds({
      left: -targetRect?.left + uiData?.x,
      top: -targetRect?.top + uiData?.y,
    });

  };

  return(
    <>
      <Draggable disabled={false} onStart={(event, uiData) => onStart(event, uiData)}>
        <div ref={draggleRef}>
          <Component setShowStyleMenu={setShowStyleMenu} x={block.positionX} y={block.positionY} style={block.style}/>
        </div>
      </Draggable>
      <ComponentMenu editContent={editContent} block={block} setShowStyleMenu={setShowStyleMenu} visible={showStyleMenu}/>
    </>
  )
}