import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseForm1 from "./ExpenceForm1";

const NewExpense = (props) => {
	const saveExpenseDataHandler = (enteredExpenseData) =>{
		const expenseData = {
			...enteredExpenseData, 
			id: Math.random().toString()
		};
		props.onAddExpense(expenseData);
	};
	return (
		<div className="new-expense">
			<ExpenseForm1 onSaveExpenseData={saveExpenseDataHandler}/>
		</div>
	);
};

export default NewExpense;
