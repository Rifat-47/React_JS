import Alldata from "./components/Alldata";
import './App.css';
import CreateData from "./components/CreateData";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

function App() {
	const dispatch = useDispatch();
	return (
		<div className="App">
			<CreateData />
			<Alldata url = 'https://jsonplaceholder.typicode.com/posts' />

		</div>
	);
}

export default App;
