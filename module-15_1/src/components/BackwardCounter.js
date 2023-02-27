import { useState, useEffect } from 'react';

import Card from './Card';
import useCounter from '../hooks/use-counter';
import useCounter1 from '../hooks/use-counter';

const BackwardCounter = () => {

	// counter using components 
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prevCounter) => prevCounter - 1);
		}, 1000);
		console.log(interval);

		return () => clearInterval(interval);
	}, []);

	return (
		<Card>
			{counter}
		</Card>
	);
};

export default BackwardCounter;
