import { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {
	const [isCheckout, setIsCheckout] = useState(false);
	const cartCtx = useContext(CartContext);
	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
		// cartCtx.addItem(item);
	};
	const cartItems = (
		<ul className={classes['cart-items']}>
			{
				cartCtx.items.map((item) => (
					<CartItem
						key={item.id}
						name={item.name}
						amount={item.amount}
						price={item.price}
						onRemove={cartItemRemoveHandler.bind(null, item.id)}
						onAdd={cartItemAddHandler.bind(null, item)}
					/>
				))
			}
		</ul>
	);

	const orderHandler = () => {
		setIsCheckout(true);
	};

	const submitOrderHandler = (userData) => {
		fetch('https://module-17-1-default-rtdb.firebaseio.com/orders.json', {
			method: 'POST',
			body: JSON.stringify({
				user: userData,
				orderedItems: cartCtx.items
			})
		});
	};

	const modalActions =
		<div className={classes.actions}>
			<button className={classes['button--alt']} onClick={props.onClose}>Close</button>
			{hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
		</div>
	return (
		<Modal onClose={props.onClose}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			{isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
			{!isCheckout && modalActions}

		</Modal>
	);
};

export default Cart;