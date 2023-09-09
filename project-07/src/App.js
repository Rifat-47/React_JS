import React, { useEffect, useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
	{
		id: "e1",
		title: "Toilet Paper",
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{ id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
	{
		id: "e3",
		title: "Car Insurance",
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: "e4",
		title: "New Desk (Wooden)",
		amount: 450,
		date: new Date(2021, 5, 12),
	},
];

const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
	const [yearOptions, setYearOptions] = useState([]);
	
	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	useEffect(()=> {
		const options = []
		// using 'in' returns index & 'of' returns value in loop
		for (let expense in expenses) {
			let year = expenses[expense].date.getFullYear()
			if (!options.includes(year)){
				options.push(year);
			}
		}
		options.unshift('All');
		console.log(options);
		setYearOptions(options);
	}, [expenses]);

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} years={yearOptions} />
		</div>
	);
};

export default App;
