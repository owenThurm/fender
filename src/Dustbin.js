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
    overflow: 'hidden'
};
export const Dustbin = ({content, addContent, editContent}) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
      accept: ItemTypes.BOX,
      drop: (item, monitor) => {
        let offset = monitor.getSourceClientOffset()
        if(item && offset) {
            onDrop(item, offset);
        }
        return { name: 'Dustbin' }
    },
      collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
      }),
  }));

  const onDrop = (item, offset) => {
    console.log(item)
    addContent(item, offset.x, offset.y);
  }

  const isActive = canDrop && isOver;
  let backgroundColor = '#222';
  if (isActive) {
      backgroundColor = 'darkgreen';
  }
  else if (canDrop) {
      backgroundColor = 'darkkhaki';
  }
  // console.log("CONTENT");
  // console.log(content);

  // Check for overlaps here

  //render json data
  return (<div class="dustbin" ref={drop} style={{ ...style, backgroundColor }}>
    {isActive ? 'Release to drop' : 'Drag a box here'}
    {content.map(block => Components(block, editContent,content))}
  </div>);
};
