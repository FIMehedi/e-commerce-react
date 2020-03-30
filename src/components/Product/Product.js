import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, img, price, category, seller, stock, key } = props.product;

    const productName = () => {
        if (name.length > 60) {
            return name.slice(1, 60) + "...";
        } else {
            return name;
        }
    }


    return (
        <div className="row product py-3 mb-3">
            <div className="col-3">
                <a href={"/product/" + key}>
                    <img className="w-100" src={img} alt="Product" title={name} />
                </a>
            </div>
            <div className="col-9 product-summary">
                <a href={"/product/" + key} title={name}>
                    <h5>{productName()}</h5>
                </a>
                <div className="details">
                    <div className="">
                        <p>Category: <strong>{category}</strong></p>
                        <p>Brand: <strong>{seller}</strong></p>
                        <p>Price: <strong>${price}</strong></p>
                        <p><small>only <strong>{stock}</strong> left in stock - order soon</small></p>
                    </div>
                    <div className="rating">

                    </div>
                </div>
                <button className="btn main-btn mt-2" onClick={props.handleAddToCart}>
                    <FontAwesomeIcon icon={faCartPlus} />
                    <span> Add to cart</span>
                    </button>
            </div>
        </div>
    );
};

export default Product;