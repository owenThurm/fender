import React, { useState } from 'react';
import ComponentMenu from './ComponentMenu';


export default ({ block, Component, editContent }) => {
  const [showStyleMenu, setShowStyleMenu] = useState(false);
  console.log(block)
  return(
    <>
      <Component setShowStyleMenu={setShowStyleMenu} x={block.positionX} y={block.positionY} style={block.style}/>
      <ComponentMenu editContent={editContent} block={block} setShowStyleMenu={setShowStyleMenu} visible={showStyleMenu}/>
    </>
  )
}