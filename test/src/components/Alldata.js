import React, { useState, useEffect } from 'react';
import classes from './Alldata.module.css';
import Data from './Data';
import { useSelector, useDispatch } from 'react-redux';
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Alldata = (props) => {
    const dispatch = useDispatch();
    const modal = useSelector(state => state.modal);
    const backdrop = useSelector(state => state.backdrop);
    const allData = useSelector(state => state.data);

    const { url } = props;
    const [data, setData] = useState([]);

    const updateHandler = () => { 
        dispatch({ type: 'modalOpen' });
    };
    const deleteHandler = (id) => { 
        dispatch({ type: 'DELETE_DATA', id: id  })
    };

    useEffect(() => {
        async function fetchData(url) {
            const response = await fetch(url);
            const data = await response.json();
            const dataString = JSON.stringify(data);
            localStorage.setItem('myData', dataString);
        }
        fetchData(url);

        const savedDataString = localStorage.getItem('myData');
        const savedData = JSON.parse(savedDataString);
        setData(savedData || []);
    }, [url]);

    return (
        <div className={classes.data}>
            {data.map(item => (
                <>
                {modal && <Modal />}
                {backdrop && <Backdrop />}
                <Data
                key={item.id}
                item={item} 
                >
                    <button onClick={updateHandler}>Update</button>
                    <button onClick={deleteHandler(item.id)}>Delete</button>
                </Data>
            </>
                
            ))}
        </div>
    );
};

export default Alldata;