import './ExpencesList.css';
import ExpenseItem from './ExpenseItem';

const ExpencesList = props =>{
    // let expencesContent = <p>no records found.</p>
	// if (props.items.length > 0){
	// 	expencesContent = props.items.map((expense) => (
	// 		<ExpenseItem
	// 			key={expense.id}
	// 			title={expense.title}
	// 			amount={expense.amount}
	// 			date={expense.date}
	// 		/>
	// 	))
	// }
    if (props.items.length === 0){
        return <h2 className='expenses-list__fallback'>no records found.</h2>;
    }
    return (
        <ul className='expenses-list'>
            {props.items.map((expence) =>
                <ExpenseItem
                    key= {expence.id}
                    title= {expence.title}
                    amount= {expence.amount}
                    date= {expence.date}
                />
            )}
        </ul>
    )
};

export default ExpencesList;