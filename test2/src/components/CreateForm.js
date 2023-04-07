import { useRef } from "react";
import classes from './CreateForm.module.css';

const CreateForm = (props) => {
    const titleRef = useRef();
    const bodyRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {title: titleRef.current.value, body: bodyRef.current.value, id: Math.random()}
        props.createDataHandler(data);
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