import classes from "./Modal.module.css";
import { useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import CreateForm from "./CreateForm";

function Modal(props) {
    const dispatch = useDispatch();
    const titleRef = useRef();
    const bodyRef = useRef();

    const handleSubmit =() => {};

    const modalCloseHandler = () => {
        dispatch({type: 'modalClose'});
    };
    return (
        <div className={classes.modal}>
            <CreateForm />
        </div>
    );
}

export default Modal;
