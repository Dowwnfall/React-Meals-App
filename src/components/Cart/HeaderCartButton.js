import CartIcon from './CartIcon'
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}><CartIcon className={classes.icon}/> Your Cart <p className={classes.badge}>0</p></button>
  )
}

export default HeaderCartButton;
