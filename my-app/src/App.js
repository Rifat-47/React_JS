import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import MovableButton from './components/MovableButton';

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (uName, uAge) => {
		setUsersList((prevUsersList) => {
			let updatedUsersList = [
				...prevUsersList,
				{ name: uName, age: uAge, id: Math.random().toString() },
			  ];
			  console.log(updatedUsersList)
		  return updatedUsersList;
		});
	  };

	return (
		<div>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList} />
			<MovableButton />
		</div>
	);
}

export default App;

