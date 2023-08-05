import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
	const [listTitle, setListTitle] = useState('My List');

	const changeTitleHandler = useCallback(() => {
		if (listTitle === 'My List') {
			setListTitle('New Title');
			// console.log(listTitle);
		}
		else {
			setListTitle('My List');
			// console.log(listTitle);
		};
	}, [listTitle]);

	let arrayList = [5, 3, 1, 10, 9];
	const listItems = useMemo(() => arrayList, [arrayList]);

	return (
		<div className="app">
			<DemoList title={listTitle} items={listItems} />
			<Button onClick={changeTitleHandler}>Change List Title</Button>
		</div>
	);
}

export default App;