import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import Components from './Components';

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
};
export const Dustbin = props => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
      accept: ItemTypes.BOX,
      drop: () => ({ name: 'Dustbin' }),
      collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
      }),
  }));
  const isActive = canDrop && isOver;
  let backgroundColor = '#222';
  if (isActive) {
      backgroundColor = 'darkgreen';
  }
  else if (canDrop) {
      backgroundColor = 'darkkhaki';
  }
  //render json data
  return (<div ref={drop} style={{ ...style, backgroundColor }}>
    {isActive ? 'Release to drop' : 'Drag a box here'}
    {console.log(props)}
    {props.content.map(block => Components(block))}
  </div>);
};
