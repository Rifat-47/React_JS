// App.js
import React, { useState } from 'react';
import DroppableContainer from './components/DroppableContainer';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { finalSpaceCharacters } from "../src/components/data";

const App = () => {
	const [items, setItems] = useState([
		{ id: 1, content: 'Item 1' },
		{ id: 2, content: 'Item 2' },
		{ id: 3, content: 'Item 3' },
	]);

	const handleDrop = (draggedItemId) => {
		// Handle the drop event and update the state accordingly
		const updatedItems = items.filter((item) => item.id !== draggedItemId);
		setItems(updatedItems);
	};

	return (
		<DndProvider backend={HTML5Backend}>
			<div style={{height: '50rem',}}>
				<DroppableContainer onDrop={handleDrop} items={items} />
			</div>
		</DndProvider>
	);
};

export default App;
