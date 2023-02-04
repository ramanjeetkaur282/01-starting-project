import { Fragment } from "react";
import mealsImage from "../../assets/meals2.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FOODLICIOUS</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of Delicious Food!" />
      </div>
    </Fragment>
  );
};
export default Header;
