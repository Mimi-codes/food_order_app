 import { Fragment } from 'react';
 import mealsImage from '../../assets/many.jpg'; 
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
return <Fragment>
    <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick = {props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
        {/* <img src="https://media.istockphoto.com/photos/uduk-betawi-rice-picture-id612820698?k=20&m=612820698&s=612x612&w=0&h=Syiqvy4GP64pZQTLr1PFpBLQccfjGNEjznv31lEiM88=" alt='A table full of delicious food!'width="100%" /> */}
        <img src={mealsImage} alt='A table full of delicious food!'width="100%" />
    </div>
</Fragment>
 };

 export default Header;