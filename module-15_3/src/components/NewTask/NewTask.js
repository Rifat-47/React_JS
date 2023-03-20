import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/useHttp.js';

const NewTask = (props) => {

	const httpData = useHttp();
	const { isLoading, error, sendRequest: sendTaskRequest } = httpData;

	const createTask = (taskText, taskData) => {
		console.log(taskData);
		const generatedId = taskData.name; // firebase-specific => "name" contains generated id
		const createdTask = { id: generatedId, text: taskText };

		props.onAddTask(createdTask);
	};

	const enterTaskHandler = async (taskText) => {
		sendTaskRequest({
			url: 'https://module-15-3-default-rtdb.firebaseio.com/tasks.json',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: { text: taskText },
		}, createTask.bind(null, taskText));
	};

	return (
		<Section>
			<TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
			{error && <p>{error}</p>}
		</Section>
	);
};

export default NewTask;
