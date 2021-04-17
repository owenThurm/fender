import { DndContext } from 'react-dnd';
import { Dustbin } from './Dustbin';
import Frame from 'react-frame-component';
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

// Don't use the decorator, embed the DnD context within the iframe
export const Container = ({content, addContent}) => {

  const renderHead = () => {
    // const {styleDependencies} = this.props
    // {styleDependencies.map(url => <link rel="stylesheet" href={url} />)}
    return (
      <React.Fragment>
        <div dangerouslySetInnerHTML={{__html: document.head.innerHTML}} />
        <link rel="stylsheet" href="index.css"/>
      </React.Fragment>
    )
  }
    // The react-frame-component will pass the iframe's 'window' global as a context value
    // to the DragDropContext provider. You could also directly inject it in via a prop.
    // If neither the prop or the context value for 'window' are present, the DndProvider
    // will just use the global window.
    return (
      <>
        <Frame head={renderHead()} style={{ width: '100%', height: 400 }}>
          <DndFrame>
            <div>
              <div style={{ overflow: 'hidden', clear: 'both' }}>
                <Dustbin content={content} addContent={addContent}/>
              </div>
            </div>
          </DndFrame>
        </Frame>
      </>);
};
