import React from 'react';
import Cart from '../Cart/Cart';

const ProductReview = () => {
    let condition = false;
    return (
        <div className="row container-fluid">
            <div className="col-lg-9 p-3">
                <div className="ml-5 p-2">
                    {   condition ?
                        <h1>Yes.</h1>
                        :
                        <div className="text-center pt-5">
                            <h3 className="p-3">Your cart is empty</h3>
                            <a className="go-to-home" href="/">Go To Homepage</a>
                        </div>

                    }
                </div>
            </div>
            <div className="col-lg-3 p-3 mt-2">
                {/* <Cart product={}></Cart> */}
            </div>
        </div>
    );
};

export default ProductReview;