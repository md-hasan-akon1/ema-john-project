import React from 'react';
import "./product.css"
import image from"../../images/images/giphy.gif"
const Product = (props) => {

    const { category, img, name, ratings, price, seller } = props.product;
    const AddToCartBtn = props.AddToCartBtn
    return (
        <div className='products'>
            <img src={img ? img : image} alt="" />
            <div className='product-inform'>
                <h5>{name}</h5>
                <p>price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>rating: {ratings}</p>
            </div>
            <button onClick={() => AddToCartBtn(props.product)} className=" add-btn" >AddToCart</button>
        </div>
    );
};

export default Product;