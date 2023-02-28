import { useState, useEffect } from 'react';

import Card from './Card';
// import useCounter from '../hooks/use-counter';
import useCounter1 from '../hooks/use-counter1';

const BackwardCounter = () => {

	// forwarding function to custom hooks
	const backwardFunc = (prevCounter) => {
		console.log(prevCounter);
		return  (prevCounter - 1);
	}

	// passing function to custom hooks
	const counter = useCounter1(backwardFunc);


	// another way: counter using custom hooks (useCounter) 
	// const counter = useCounter(false);

	return (
		<Card>
			{counter}
		</Card>
	);
};

export default BackwardCounter;
