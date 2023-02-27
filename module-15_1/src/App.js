import React from 'react';
import BackwardCounter from './components/BackwardCounter';
import ForwardCounter from './components/ForwardCounter';

function App() {
	return (
		<React.Fragment>
			{/* using custom hooks  */}
			<ForwardCounter />

			{/* using components */}
			<BackwardCounter />
		</React.Fragment>
	);
} 

export default App;
