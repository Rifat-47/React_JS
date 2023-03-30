import { useState, useRef } from 'react';

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState('');
	const nameInputRef = useRef();
	const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);

	const nameInputChangeHandler = (event) => {
		setEnteredName(event.target.value);
		if (event.target.value.trim() !== "") {
			setEnteredNameIsValid(true);
			// setEnteredNameTouched(true);
		};
	};

	const nameInputBlurHandler = (event) => {
		setEnteredNameTouched(true);
		if (enteredName.trim() === "") {
			setEnteredNameIsValid(false);
			setEnteredNameTouched(true);
		};
	};

	const formSubmissionHandler = (event) => {
		event.preventDefault();
		if (enteredName.trim() === "") {
			setEnteredNameIsValid(false);
			setEnteredNameTouched(true);
			return;
		};

		setEnteredNameIsValid(true);
		console.log(enteredName);

		const enteredValue = nameInputRef.current.value;
		console.log(enteredValue);

		// nameInputRef.current.value = ""; => not IdleDeadline, dont manipulate the dom 
		setEnteredName("");
	};

	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

	const nameInputClasses = nameInputIsInvalid
		? 'form-control invalid'
		: 'form-control';
	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input type='text' id='name' 
					value={enteredName} 
					onChange={nameInputChangeHandler} 
					onBlur={nameInputBlurHandler}
					ref={nameInputRef} />
				{nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p>}
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
