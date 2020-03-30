import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import './ProductDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const ProductDetails = () => {
    const { productKey } = useParams();
    const product = fakeData.find(product => product.key === productKey);
    const { name, img, price, category, seller, stock, features } = product;
    let isProductAvailable = true;
    if (stock === 0) {
        isProductAvailable = false;
    }
    let featuresAvailable = true;
    if (features.length < 1) {
        featuresAvailable = false;
    }

    console.log(featuresAvailable)
    return (
        <div className="container product-details">
            <div className="row p-3">
                <div className="col-lg-4">
                    <img className="w-100 mr-2" src={img} alt="" />
                </div>
                <div className="col-lg-8">
                    <div>
                        <h3>{name}</h3>
                        <span>Category: {category} </span>|
                        <span> Brand: {seller} </span>|
                        <span> ID: {productKey} </span>
                        <p className="mt-3">
                            {isProductAvailable ?
                                <strong className="text-success">This product is available now</strong>
                                :
                                <strong className="text-danger">This product is out of stock</strong>
                            }
                        </p>
                    </div>
                    <div className="specification">
                        {featuresAvailable &&
                            <h4 className="text-center mt-4">Specification</h4>
                        }
                        <ul className="px-5">
                            {
                                features.map(item => <li>{item.description} : {item.value}</li>)
                            }
                        </ul>
                        <h4 className="text-center">Price</h4>
                        <form className="px-5 d-inline-block" action="" >
                            <input type="radio" name="warranty" id="" /> 1 year warranty <br />
                            <input type="radio" name="warranty" id="" /> 2 year warranty <br />
                            <input type="radio" name="warranty" id="" /> 3 year warranty <br />

                        </form>
                        <div className="float-right">
                            <h6 className="pt-2">
                                <strong>Price : ${price} </strong>
                            </h6>
                            <button className="btn main-btn"><FontAwesomeIcon icon={faCartPlus} /> Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProductDetails;