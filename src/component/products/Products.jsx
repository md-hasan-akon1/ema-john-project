import React, { useEffect, useState } from 'react';
import { AddToDb, getShoppingCart, removeShoppingCart } from '../AddToDb/AddToDb';

import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./products.css"

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("/public/data.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart=[];
        for (const id in storedCart) {
            const saveProduct = products.find(product => product.id == id);
            if (saveProduct) {
                const quantity = storedCart[id];
                saveProduct.quantity = quantity;
                saveCart.push(saveProduct)
            }
            
        }
        setCart(saveCart)
    }, [products])
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