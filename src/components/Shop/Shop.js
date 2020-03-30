import React, { useState, createContext, useContext } from 'react';
import './Shop.css'
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const CartContext = createContext();
export const CartContextProvider = props => {
    const cart = Shop();
    return <CartContext.Provider value={cart}>{props.children}</CartContext.Provider>
}
export const useCart = () => useContext(CartContext);

const Shop = () => {
    const first10 = fakeData.slice(1, 10);
    const [product, setProduct] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        const cartItem = [...cart, product];
        setCart(cartItem);
    }

    return (
        <div className="row container-fluid">
            <div className="col-lg-9 p-3">
                <div className="ml-5 p-2">
                    {
                        product.map(product => <Product
                             key={product.key} 
                             product={product}
                             handleAddToCart = {() => handleAddToCart(product)}
                             ></Product>)
                    }
                </div>
            </div>
            <div className="col-lg-3 p-3 mt-2">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;