import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../Shop/Shop';

const Header = () => {
    const cartItem = useCart();
    console.log(cartItem)
    let userLoggedIn = false;
    return (
        <header>
            <div className="logo">
                <a href="/">
                    <img className="img-fluid p-2" src={logo} alt="" />
                </a>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                    <ul className="navbar-nav mr-auto mt-2 ml-lg-5 mt-lg-0">
                        <li className="nav-item">
                            <a href="/shop" className="nav-link">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a href="/review" className="nav-link">Order Review</a>
                        </li>
                        <li className="nav-item">
                            <a href="/inventory" className="nav-link">Manage Inventory</a>
                        </li>
                    </ul>

                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2 search" type="search" placeholder="Search" aria-label="Search" />
                        <a href="/review">
                            <span className="mx-2 cart-count">
                                <FontAwesomeIcon icon={faShoppingCart} /> <span>{0}</span>
                            </span>
                        </a>
                    </form>
                    <div className="pl-2 user">
                        {
                            userLoggedIn ?
                            <a href="/">Fokrul Islam</a>
                            :
                            <a href="/signin">Sign in</a>
                        }
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;