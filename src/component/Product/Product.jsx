import React from 'react';
import "./product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import image from"../../images/images/giphy.gif"
const Product = (props) => {

    const { category, img, name, ratings, price, seller } = props.product;
    const AddToCartBtn1 = props.AddToCartBtn
    return (
        <div className='products'>
            <img src={img ? img : image} alt="" />
            <div className='product-inform'>
                <h5>{name}</h5>
                <p>price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>rating: {ratings}</p>
            </div>
            <button onClick={() => AddToCartBtn1(props.product)} className=" add-btn" > AddToCart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;