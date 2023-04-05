import React, { useState, useEffect } from 'react';
import classes from './Alldata.module.css';
import Data from './Data';
import { useSelector, useDispatch } from 'react-redux';
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { ADD_DATA, UPDATE_DATA, DELETE_DATA, LOAD_DATA } from '../store/scc';
const Alldata = (props) => {
    const dispatch = useDispatch();
    const modal = useSelector(state => state.modal);
    const backdrop = useSelector(state => state.backdrop);
    const allData = useSelector(state => state.data);

    const { url } = props;

    const updateHandler = () => {
        const data = {}
        dispatch({ type: UPDATE_DATA})
    };

    const deleteHandler = (id) => {
        console.log(id);
        dispatch({ type: 'DELETE_DATA', id: id })
    };

    const loadHandler = (data) => {
        dispatch({type: LOAD_DATA, data: data})
    };

    useEffect(() => {
        async function fetchData(url) {
            const response = await fetch(url);
            const data = await response.json();
            const dataString = JSON.stringify(data);
            localStorage.setItem('myData', dataString);
            dispatch({ type: LOAD_DATA, data: data})
        }
        fetchData(url);

    }, [url]);

    return (
        <div className={classes.data}>
            {allData.map(item => (
                <>
                    {modal && <Modal />}
                    {backdrop && <Backdrop />}
                    <Data
                        key={item.id}
                        item={item}
                    >
                        <button onClick={() => updateHandler(item)}>Update</button>
                        <button onClick={() => deleteHandler(item.id)}>Delete</button>
                    </Data>
                </>

            ))}
        </div>
    );
};

export default Alldata;