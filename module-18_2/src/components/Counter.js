// useSelector or useStore can be used to get access the redux 
// connect can be used to get access the redux for classbased components
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { Increment, Decrement, IncrementByAmount } from '../store';

const Counter = () => {
	const dispatch = useDispatch(); // useDispatch returns a function
	
	const counter = useSelector(state => state.counter); // useSelector gives as current snapshot
	const show = useSelector(state => state.showCounter); // useSelector gives as current snapshot

	const incrementHandler = () => {
		dispatch({ type: Increment });
	};

	const decrementHandler = () => {
		dispatch({ type: Decrement });
	};

	const increaseHandler = () => {
		dispatch({ type: IncrementByAmount, amount: 5 })
	};

	const toggleCounterHandler = () => {
		dispatch({ type: 'toggle' })
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
