import { useDrop } from 'react-dnd';
import PropTypes from 'prop-types';
import React from 'react';
import ItemTypes from './Types/ItemTypes';
import Components from './Components';
import Block from './Models/Block';

const style = {
  height: '100vh',
  width: '100%',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
  overflow: 'hidden',
};

const propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.instanceOf(Block),
  ).isRequired,
  addContent: PropTypes.func.isRequired,
  editContent: PropTypes.func.isRequired,
};

const Dustbin = ({
  content,
  addContent,
  editContent,
}) => {
  const onDrop = (item, offset) => {
    addContent(item, offset.x, offset.y);
  };

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: (item, monitor) => {
      const offset = monitor.getSourceClientOffset();
      if (item && offset) {
        onDrop(item, offset);
      }
      return { name: 'Dustbin' };
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = '#222';
  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }

  // render json data
  return (
    <div
      className="dustbin"
      ref={drop}
      style={{ ...style, backgroundColor }}
    >
      {isActive ? 'Release to drop' : 'Drag a box here'}
      {content.map((block) => Components(block, editContent, content))}
    </div>
  );
};

Dustbin.propTypes = propTypes;

export default Dustbin;
