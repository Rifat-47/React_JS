import { createStore } from 'redux';

// Define action types
const ADD_DATA = 'ADD_DATA';
const UPDATE_DATA = 'UPDATE_DATA';
const DELETE_DATA = 'DELETE_DATA';
const LOAD_DATA = 'LOAD_DATA';
const MODAL_OPEN = 'modalOpen';
const MODAL_CLOSE = 'modalClose';
const initialState = {data: localStorage.getItem('myData'), modal: false, backdrop: false};

// Define reducer
const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_DATA:
			return [...state, action.data];
		case UPDATE_DATA:
			return state.map((data) =>
				data.id === action.id ? { ...data, ...action.data } : data
			);
		case DELETE_DATA:
			return state.data.filter((data) => data.id !== action.id);
		case LOAD_DATA:
			const storedData = localStorage.getItem('myData');
			return storedData ? JSON.parse(storedData) : state;
		case MODAL_OPEN:
			return {data: localStorage.getItem('myData'), modal: true, backdrop: true}
		case MODAL_CLOSE:
			return {data: localStorage.getItem('myData'), modal: false, backdrop: false}
		default:
			return state;
	}
};


// Create store
const store = createStore(dataReducer);

export default store;