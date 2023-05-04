// useSelector or useStore can be used to get access the redux 
// connect can be used to get access the redux for classbased components
import { counterActions } from '../store/counter';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
	const dispatch = useDispatch(); // useDispatch returns a function
	
	const counter = useSelector(state => state.counter.counter); // useSelector gives as current snapshot
	const show = useSelector(state => state.counter.showCounter); // useSelector gives as current snapshot

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};

	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};

	const increaseHandler = () => {
		dispatch(counterActions.increaseByAmount(5)); // {type: uniqueIdentifier, payload: 5}
	};

	const toggleCounterHandler = () => {
		dispatch(counterActions.toogleCounter());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler} >Increment</button>
				<button onClick={increaseHandler} >Increment by 5</button>
				<button onClick={decrementHandler} >Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
