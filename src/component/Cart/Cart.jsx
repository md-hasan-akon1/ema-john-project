import React from 'react';
import "./Cart.css"
const Cart = (props) => {
    const carts = props.cart;

    let totalPrice = 0;
    let totalShippingPrice = 0;
    let totalTax = 0;
    let grandTotal = 0;
    for (const cart of carts) {
        totalPrice = totalPrice + cart.price
        totalShippingPrice = totalShippingPrice + cart.shipping;
        totalTax = (totalPrice * 7) / 100;
        grandTotal = totalPrice + totalShippingPrice + totalTax;
    }
    return (
        <div className='cart'>
            <h4>order summery</h4>
            <p>selected items : {carts.length} </p>
            <p>total price : {totalPrice}</p>
            <p>total shipping price : {totalShippingPrice}</p>
            <p>tax : {totalTax.toFixed(2)}</p>
            <h4 className='mt-8'>grand total : {grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;