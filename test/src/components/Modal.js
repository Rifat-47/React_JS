import classes1 from "./Modal.module.css";
import classes from './CreateForm.module.css';
import { useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
function Modal(props) {
    const dispatch = useDispatch();
    const titleRef = useRef();
    const bodyRef = useRef();

    const handleSubmit =() => {};

    const modalCloseHandler = () => {
        dispatch({type: 'modalClose'});
    };
    return (
        <div className={classes1.modal}>
            <div className={classes.container}>
                <form onSubmit={handleSubmit}>
                    <div className={classes.control}>
                        <label>Title:</label>
                        <input type="text" ref={titleRef} />
                    </div>
                    <div className={classes.control}>
                        <label>Body:</label>
                        <input type="text" ref={bodyRef} />
                    </div>
                    <button className={classes.button} type="submit">Submit</button>
                    <button className={classes.button} type="submit" onClick={modalCloseHandler}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default Modal;
