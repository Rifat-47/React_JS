import React from 'react';
import BackwardCounter from './components/BackwardCounter';
import ForwardCounter from './components/ForwardCounter';

function App() {
	return (
		<React.Fragment>
			{/* using custom hooks use-counter.js */}
			<ForwardCounter />

			{/* using custom hooks use-counter1.js */}
			<BackwardCounter />
		</React.Fragment>
	);
} 

export default App;
