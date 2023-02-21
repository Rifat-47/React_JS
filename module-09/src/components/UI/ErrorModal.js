import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';
import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';

const ErrorModal = (props) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
			<Backdrop onConfirm={props.onConfirm} />,
			document.getElementById('backdrop-root')
		)}
		{ReactDOM.createPortal(
			<ModalOverlay
			title={props.title}
			message={props.message}
			onConfirm={props.onConfirm}
			/>,
			document.getElementById('overlay-root')
		)}
		</React.Fragment>
	);
};

export default ErrorModal;
