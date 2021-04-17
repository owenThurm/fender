import React, { useState } from 'react';
import ComponentMenu from './ComponentMenu';


export default ({ Component, x, y }) => {
  const [showStyleMenu, setShowStyleMenu] = useState(false);

  return(
    <>
      <Component setShowStyleMenu={setShowStyleMenu} x={x} y={y}/>
      <ComponentMenu setShowStyleMenu={setShowStyleMenu} visible={showStyleMenu}/>
    </>
  )
}