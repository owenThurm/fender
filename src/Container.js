import { DndContext } from 'react-dnd';
import React, { useContext, useEffect } from 'react';
import { FrameContext } from 'react-frame-component';
import PropTypes from 'prop-types';
import Dustbin from './Dustbin';
import Block from './Models/Block';

const DndFrame = ({ children }) => {
  const { dragDropManager } = useContext(DndContext);
  const { window } = useContext(FrameContext);

  useEffect(() => {
    dragDropManager.getBackend().addEventListeners(window);
  });

  return children;
};

const containerPropTypes = {
  content: PropTypes.arrayOf(
    PropTypes.instanceOf(Block),
  ).isRequired,
  addContent: PropTypes.func.isRequired,
  editContent: PropTypes.func.isRequired,
};

// Don't use the decorator, embed the DnD context within the iframe
const Container = ({
  content,
  addContent,
  editContent,
}) => (
  // The react-frame-component will pass the iframe's 'window' global as a context value
  // to the DragDropContext provider. You could also directly inject it in via a prop.
  // If neither the prop or the context value for 'window' are present, the DndProvider
  // will just use the global window.
  <div>
    <DndFrame>
      <div
        style={{ width: 800 }}
      >
        <Dustbin content={content} addContent={addContent} editContent={editContent} />
      </div>
    </DndFrame>
  </div>
);

Container.propTypes = containerPropTypes;

export default Container;
