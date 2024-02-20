// DroppableContainer.js
import { useDrop } from 'react-dnd';
import DraggableItem from "./DraggableItem";

const DroppableContainer = ({ onDrop, items }) => {
    const [, drop] = useDrop({
        accept: 'ITEM',
        drop: (draggedItem, monitor) => {
            const didDrop = monitor.didDrop();
            if (!didDrop) {
                // If the drop was not successful, revert the item to its previous position
                return;
            }

            onDrop(draggedItem.id);
        },
    });

    return (
        <div
            ref={drop}
            style={{
                minHeight: '500px',
                border: '1px solid #ddd',
                padding: '16px',
            }}
        >
            {items.map((item) => (
                <DraggableItem key={item.id} item={item} />
            ))}
        </div>
    );
};


export default DroppableContainer;