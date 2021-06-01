import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './Stateprovider';
import { auth } from "./firebase";

function Header(){
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
    <div 
        className="header">
        <Link to="/">
        <img 
            className="header_logo"
            src="http://pngimg.com/uploads/shopping_cart/shopping_cart_PNG62.png"
            alt="" />    

        </Link>
        <Link to="/">
        <div className="header_name">
            <p>Shoppie</p>
        </div>
        </Link>
        <div
        className="header_search">
            <input
            className="header_searchInput" type="text"/>
            <SearchIcon className="header_searchIcon" />
        </div>
        <div className="header_nav">
            <Link to={!user && '/login'}>
            <div onClick={handleAuthentication}
            className='header_option'>
                <span className='header__optionLineOne'>
                    Hello { !user ? 'Guest' : user.email }
                </span>
                <span className='header__optionLineTwo'>
                    {user ? 'Sign Out' : 'Sign In'}
                </span>
            </div>
            </Link>

            <div className='header_option'>
            <span className='header__optionLineOne'>
                    Returns
            </span>
            <span className='header__optionLineTwo'>
                    & Orders
            </span>
            </div>
            <div className='header_option'>
            <span className='header__optionLineOne'>
                    Premium
            </span>
            <span className='header__optionLineTwo'>
                    Membership
            </span>
            </div>
            <Link to="/checkout">
            <div className='header_optionBasket'>
                <ShoppingBasketIcon />
                <span className="header__optionLineTwo
                 header__basketCount">{basket?.length}</span>
            </div>
            </Link>
        </div>
    </div>
    );
}

export default Header
