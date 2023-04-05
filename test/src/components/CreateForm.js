import { useRef } from "react";
import classes from './CreateForm.module.css';

const CreateForm = (props) => {
    const titleRef = useRef();
    const bodyRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createDataHandler(titleRef.current.value, bodyRef.current.value);
        bodyRef.current.value = "";
        titleRef.current.value = "";
    }

    return (
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
            </form>
        </div>
    );
};


export default CreateForm;