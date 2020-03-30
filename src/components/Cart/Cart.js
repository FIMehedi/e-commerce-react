import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const cart = props.cart;
    const cartItem = cart.length;
    const total = cart.reduce((total, product) => total + product.price, 0);
    const shipping = cart.reduce((shipping, product) => shipping + product.shipping, 0);
    const tax = total / 100;
    const orderTotal = total + shipping + tax;

    const formatNum = number => Number(number.toFixed(2));

    
    
    return (
        <div className="cart p-3 sticky-top">
            <h5 className="text-center font-weight-bold mb-3">Order Summary</h5>
            <p>Cart Item: <span>{cartItem}</span></p>
            <p>Product Price: <span>${formatNum(total)}</span></p>
            <p>Shipping & Handling: <span>${formatNum(shipping)}</span></p>
            <p>Total tax: <span>${formatNum(tax)}</span></p>
            <h6 className="font-weight-bold text-success">Order Total: <span>${formatNum(orderTotal)}</span></h6>

            <a href="/review" className="btn main-btn review-btn w-100">
                <FontAwesomeIcon icon={faShoppingBag} /> Review your order
            </a>
        </div>
    );
};

export default Cart;