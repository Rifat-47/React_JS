// DraggableItem.js
import { useDrag } from 'react-dnd';

const DraggableItem = ({ item }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'ITEM',
        item: { id: item.id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return <div
        ref={drag}
        style={{
            padding: '8px',
            margin: '8px',
            backgroundColor: '#eee',
            cursor: 'move',
            border: '3px solid #ddd',
            opacity: isDragging ? 0.5 : 1,
        }}
    >
        {item.content}
    </div>;
};

export default DraggableItem;
