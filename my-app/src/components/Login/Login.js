import React, { useReducer, useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
	if (action.type === 'emailInput'){
		return {value: action.val, isValid: action.val.includes('@')}
	}
	if (action.type === 'emailValidate'){
		return {value: state.value, isValid: state.value.includes('@')}
	}
	else {
		return {value: '', isValid: false}
	}
};

const passwordReducer = (state, action) => {
	if (action.type === 'passwordInput'){
		return {value: action.val, isValid: action.val.trim().length > 6}
	}
	if (action.type === 'passwordValidate'){
		return {value: state.value, isValid: state.value.trim().length > 6}
	}
	else {
		return {value: '', isValid: false}
	}
};

const Login = (props) => {
	const [emailState, emailDispatch] = useReducer(emailReducer, {value: '', isValid: null});
	const [passwordState, passwordDispatch] = useReducer(passwordReducer, {value: '', isValid: null});
	const [formIsValid, setFormIsValid] = useState(false);

	// extracting 'isValid' property from state & giving it a new value 
	const { isValid: emailIsValid} = emailState;
	const { isValid: passwordIsValid} = passwordState;

	useEffect(()=>{
		const identifier = setTimeout(()=>{
			console.log('useEffect!');
			setFormIsValid(emailIsValid && passwordIsValid);
		}, 500);

		return ()=>{
			console.log('cleanup!');
			clearTimeout(identifier);		}
	},[emailIsValid, passwordIsValid]);

	const emailChangeHandler = (event) => {
		emailDispatch({type: 'emailInput', val: event.target.value});
	};

	const passwordChangeHandler = (event) => {
		passwordDispatch({type: 'passwordInput', val: event.target.value});
	};

	const validateEmailHandler = () => {
		emailDispatch({type:'emailValidate'});
		
	};

	const validatePasswordHandler = () => {
		passwordDispatch({type:'passwordValidate'});
	};

	const submitHandler = (event) => {
		event.preventDefault();
		props.onLogin(emailState.value, passwordState.value);
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<div
					className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
						}`}
				>
					<label htmlFor="email">E-Mail</label>
					<input
						type="email"
						id="email"
						value={emailState.value}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler}
					/>
				</div>
				<div
					className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
						}`}
				>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						value={passwordState.value}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler}
					/>
				</div>
				<div className={classes.actions}>
					<Button type="submit" className={classes.btn} disabled={!formIsValid}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
