import { DndProvider, DndContext } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Dustbin } from './Dustbin';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import React, { useContext, useEffect } from 'react';
import { FrameContext } from 'react-frame-component';

const DndFrame = ({ children }) => {
  const { dragDropManager } = useContext(DndContext);
  const { window } = useContext(FrameContext);

  useEffect(() => {
    dragDropManager.getBackend().addEventListeners(window);
  });

  return children;
};

const FrameBindingContext = ({ children }) => (<FrameContextConsumer>
		{({ window }) => (<DndProvider backend={HTML5Backend} context={window}>
				{children}
			</DndProvider>)}
	</FrameContextConsumer>);
// Don't use the decorator, embed the DnD context within the iframe
export const Container = props => {
    // The react-frame-component will pass the iframe's 'window' global as a context value
    // to the DragDropContext provider. You could also directly inject it in via a prop.
    // If neither the prop or the context value for 'window' are present, the DndProvider
    // will just use the global window.
    return (
      <>
      <Frame style={{ width: '100%', height: 400 }}>
				<DndFrame>
					<div>
						<div style={{ overflow: 'hidden', clear: 'both' }}>
							<Dustbin content={props.content}/>
						</div>
					</div>
				</DndFrame>
			</Frame>
      </>);
};
