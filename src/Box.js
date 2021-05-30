import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';
import React from 'react';
import ItemTypes from './Types/ItemTypes';

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
};

const propTypes = {
  name: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
};

const Box = ({ name, component }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name, component },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [name, component]);
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div
      ref={drag}
      style={{ ...style, opacity }}
    >
      {name}
    </div>
  );
};

Box.propTypes = propTypes;

export default Box;
