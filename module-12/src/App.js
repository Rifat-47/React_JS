import React, { useState, useCallback } from 'react';
import Button from "../src/components/UI/Button/Button";
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
	const [showParagraph, setShowParagraph] = useState(false);
	const [allowToggle, setAllowToggle] = useState(false);

	const toggleParagraphHandler = useCallback(() => {
		if (allowToggle) {
			setShowParagraph((prevShowParagraph) => !prevShowParagraph);
		}
	}, [allowToggle]);

	const allowToggleHandler = () => {
		setAllowToggle(true);
	};

	console.log("App running...")
	return (
		<div className="app">
			<h1>Hi there!</h1>
			<DemoOutput show={showParagraph} />
			<Button text='Allow Toggling' onClick={allowToggleHandler}>Allow Toggling</Button>
			<Button text='Toggle Paragraph' onClick={toggleParagraphHandler} >Toggle Paragraph</Button>
		</div>
	);
}
export default App;
