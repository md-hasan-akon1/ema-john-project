import React from 'react';
import "./Cart.css"
const Cart = (props) => {
    const products = props.cart;
    console.log(products)
console.log(products)
    let totalPrice = 0;
    let totalShippingPrice = 0;
    let totalTax = 0;
    let grandTotal = 0;
    let quantity=0
    for (const product of products) {
        // product.quantity=product.quantity||1
        if(product.quantity===0){
            product.quantity=1;
        }
        totalPrice = totalPrice + product.price*product.quantity;
        totalShippingPrice = totalShippingPrice + product.shipping;
        totalTax = (totalPrice * 7) / 100;
        grandTotal = totalPrice + totalShippingPrice + totalTax;
        quantity=quantity+product.quantity
    }
    return (
        <div className='cart'>
            <h4>order summery</h4>
            <p>selected items : {quantity} </p>
            <p>total price : {totalPrice}</p>
            <p>total shipping price : {totalShippingPrice}</p>
            <p>tax : {totalTax.toFixed(2)}</p>
            <h4 className='mt-8'>grand total : {grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;