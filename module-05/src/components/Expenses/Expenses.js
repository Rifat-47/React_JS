import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpencesList from "./ExpencesList";
import ExpencesChart from "./ExpencesChart";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020');
	const filterChangeHandler = selectYear => {
		setFilteredYear(selectYear);
	};
	const filteredExpences = props.items.filter(expence => {
		// console.log(expence.date.getFullYear());
		return expence.date.getFullYear().toString() === filteredYear;
	});

	return (
		<Card className="expenses">
			<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
			{/* {filteredExpences.length === 0 ? 
				(<p>no records found.</p>) : 
				(filteredExpences.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				)))} */}
				{/* {expencesContent} */}
			<ExpencesChart expences={filteredExpences} />
			<ExpencesList items={filteredExpences} />
		</Card>
	);
};

export default Expenses;
