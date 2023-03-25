import React from 'react';
import ReactDOM from 'react-dom';
import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
	return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

export default Backdrop;