import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {

        const storedCart = getStoredCart();
        const saveCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            // console.log(addedProduct);
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct)
            }
        }
        setCart(saveCart);
    }, [products])

    const handleAddToCart = (selectedProducts) => {
        console.log(selectedProducts);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProducts.id);
        if (!exists) {
            selectedProducts.quantity = 1;
            newCart = [...cart, selectedProducts];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProducts.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        // cart.push(product)

        setCart(newCart);
        addToDb(selectedProducts.id)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;