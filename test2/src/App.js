import Alldata from "./components/Alldata";
import './App.css';
import CreateData from "./components/CreateData";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { ADD_DATA } from "./store/scc";
import CreateForm from "./components/CreateForm";

function App() {
	const dispatch = useDispatch();

	const addDataHandler = (data) => {
		console.log(data);
		dispatch({type: ADD_DATA, data: data});
	};
	return (
		<div className="App">
			<CreateForm createDataHandler={addDataHandler} />
			<Alldata url = 'https://jsonplaceholder.typicode.com/posts' />

		</div>
	);
}

export default App;
