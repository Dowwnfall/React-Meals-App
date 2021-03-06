import React from 'react';

import HeaderCartButton from '../Cart/HeaderCartButton';

import classes from './Header.module.css'
import mealsImage from './meals.jpg'


const Header = (props) => {
  return (
    <>
      <nav className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton/>
      </nav>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Meals we serve" />
      </div>
    </>
  )
}
export default Header;
