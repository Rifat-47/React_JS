import { useState } from 'react';
import useInput from '../hooks/use_input';

const SimpleNameInput = (props) => {
	// name is handled by custom hook 
	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameInputChangeHandler,
		inputBlurHandler: nameInputBlurHandler,
		reset: resetNameInput
	} = useInput(value => value.trim() !== '');

	let formIsValid = false;

	if (enteredNameIsValid) {
		formIsValid = true;
	}

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		if (!formIsValid) {
			return;
		}

		console.log(enteredName);

		resetNameInput();
	};

	const nameInputClasses = nameInputHasError
		? 'form-control invalid'
		: 'form-control';

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					onChange={nameInputChangeHandler}
					onBlur={nameInputBlurHandler}
					value={enteredName}
				/>
				{nameInputHasError && (
					<p className='error-text'>Name must not be empty.</p>
				)}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleNameInput;
