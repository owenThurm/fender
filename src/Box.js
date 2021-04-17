import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
const style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
};
export const Box = ({ name, component }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.BOX,
        item: { name, component },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                //append to json model
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }), [name, component]);
    const opacity = isDragging ? 0.4 : 1;
    return (<div ref={drag} style={{ ...style, opacity }}>
			{name}
		</div>);
};
