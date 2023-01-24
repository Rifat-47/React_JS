import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                {/* <button>Cart</button> */}
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div>
                <img className={classes['main-image']} src={mealsImage} alt="mealsImage" />
            </div>
        </React.Fragment>
    );
}

export default Header;