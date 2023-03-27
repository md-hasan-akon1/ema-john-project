import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./products.css"

const Products = () => {
    const [products, setProducts] = useState([])
    const [cart,setCart]=useState([])
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const AddToCartBtn=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
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
                <h4>order summery</h4>
                <p>selected items:{cart.length} </p>
            </div>
        </div>
    );
};

export default Products;