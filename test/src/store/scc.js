import { createStore } from 'redux';

// Define action types
export const LOAD_DATA = 'LOAD_DATA';
export const ADD_DATA = 'ADD_DATA';
export const UPDATE_DATA = 'UPDATE_DATA';
export const DELETE_DATA = 'DELETE_DATA';

const initialState = { data: [], modal: false, backdrop: false };

// Define reducer
const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_DATA:
			localStorage.setItem('myData', JSON.stringify(action.data));
			return {...state, data: action.data };
		case ADD_DATA:
			localStorage.setItem('myData', JSON.stringify([...state.data, action.data]));
			return { ...state, data: [...state.data, action.data] };
		case UPDATE_DATA:
			const updatedData = state.data.map((data) =>
				data.id === action.id ? { ...data, ...action.data } : data
			);
			localStorage.setItem('myData', JSON.stringify(updatedData));
			// return { ...state, data: updatedData };
			return {data: updatedData, modal: true, backdrop: true};
		case DELETE_DATA:
			console.log(action)
			const filteredData = state.data.filter((data) => data.id !== action.id);
			localStorage.setItem('myData', JSON.stringify(filteredData));
			return {data: filteredData, modal: false, backdrop: false};
		case LOAD_DATA:
			return {data : [...state.data, action.data], modal: false, backdrop: false}
		default:
			return state;
	}
};



// Create store
const store = createStore(dataReducer);

export default store;