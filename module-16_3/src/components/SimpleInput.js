import { useState } from 'react';
import useInput from '../hooks/use_input';

const SimpleInput = (props) => {
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

	const enteredEmailIsValid = enteredEmail.includes('@');
	const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

	const emailInputChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
	};

	const emailInputBlurHandler = (event) => {
		setEnteredEmailTouched(true);
	};


	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameInputChangeHandler,
		inputBlurHandler: nameInputBlurHandler,
		reset: resetNameInput
	} = useInput(value => value.trim() !== '');

	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		if (!formIsValid) {
			return;
		}

		console.log(enteredName, enteredEmail);

		resetNameInput();

		setEnteredEmail('');
		setEnteredEmailTouched(false);
	};

	const nameInputClasses = nameInputHasError
		? 'form-control invalid'
		: 'form-control';

	const emailInputClasses = enteredEmailIsInvalid
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
			<div className={emailInputClasses}>
				<label htmlFor='email'>Your E-Mail</label>
				<input
					type='email'
					id='email'
					onChange={emailInputChangeHandler}
					onBlur={emailInputBlurHandler}
					value={enteredEmail}
				/>
				{enteredEmailIsInvalid && (
					<p className='error-text'>Please enter a valid email.</p>
				)}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;

// title: `Recordings must be at least ${videoDuration} seconds in duration.`,
