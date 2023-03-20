import React, { useCallback, useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/useHttp';

function App() {
	const { isLoading, error, sendRequest: fetchTasks } = useHttp();

	const [tasks, setTasks] = useState([]);
	
	useEffect(() => {
		const transformTasks = (tasksObj) => {
			// console.log(tasksObj);
			const loadedTasks = []; 
	
			for (const taskKey in tasksObj) {
				loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
			}
			// console.log(loadedTasks);
			setTasks(loadedTasks);
		};

		fetchTasks({ url: 'https://module-15-3-default-rtdb.firebaseio.com/tasks.json' }, transformTasks);
	}, []);

	const taskAddHandler = (task) => {
		setTasks((prevTasks) => prevTasks.concat(task));
		// console.log(tasks);
	};

	return (
		<React.Fragment>
			<NewTask onAddTask={taskAddHandler} /> 
			 <Tasks
				items={tasks}
				loading={isLoading}
				error={error}
				onFetch={fetchTasks}
			/>
		</React.Fragment>
	);
}

export default App;