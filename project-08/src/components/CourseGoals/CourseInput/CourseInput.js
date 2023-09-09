import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
// import classes from './CourseInput.module.css';
import styled from 'styled-components';

// FormControl is a styled component, we can give className or props to the styled components
	// and css property can be added dynamically inside styled components using props.
const FormControl = styled.div`
	margin: 0.5rem 0;
  
	& label {
		font-weight: bold;
		display: block;
		margin-bottom: 0.5rem;
	}
  
	& input {
		display: block;
		width: 100%;
		// css property can be given with respect to value received by props
		border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
		background-color: ${props => (props.invaluid ? 'red' : '#ccc')}
		font: inherit;
		line-height: 1.5rem;
		padding: 0 0.25rem;
	}
  
	& input:focus {
		outline: none;
		background: #fad0ec;
		border-color: #8b005d;
	}
  
	&.invalid input{
		border-color: #ffd7d7;
		background: salmon; 
	}
	&.invalid label{
		color: red;
	}`


const CourseInput = props => {
	const [enteredValue, setEnteredValue] = useState('');
	const [isValid, setIsValid] = useState(true);

	const goalInputChangeHandler = event => {
		if (event.target.value.trim().length > 0) {
			setIsValid(true);
		}
		setEnteredValue(event.target.value);
	};

	const formSubmitHandler = event => {
		event.preventDefault();
		if (enteredValue.trim().length === 0) {
			setIsValid(false);
			return;
		}
		props.onAddGoal(enteredValue);
		setEnteredValue('');
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<FormControl className={!isValid && 'invalid'}>
			{/* <FormControl invalid={!isValid}> */}
			<label >Course Goal</label>
				<input type="text" onChange={goalInputChangeHandler} value={enteredValue} />
			</FormControl>
			<Button type="submit" text="Add Goal"></Button>
		</form>
	);
};

export default CourseInput;
