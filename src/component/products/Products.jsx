import React, { useEffect, useState } from 'react';
import { AddToDb } from '../AddToDb/AddToDb';

import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./products.css"

const Products = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch("../../../public/data.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const AddToCartBtn = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        AddToDb(product.id)
    }
    return (
        <div className='product-container'>
            <div className='product-contain'>
                {products.map(product =>
                    <Product
                        product={product}
                        key={product.id}
                        AddToCartBtn={AddToCartBtn}
                    ></Product>
                )}
            </div>
            <div className='mx-auto'>
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Products;