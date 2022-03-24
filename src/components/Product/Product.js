import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {
    // const Product = ({ product, handleAddToCart }) => {
    // const { product, handleAddToCart } = props;
    // const { name, ratings, category, seller, price, img } = product;z
    const { name, ratings, category, seller, price, img } = props.product;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Ratings: {ratings}</p>
                <p>Category: {category}</p>
                <p>Seller: {seller}</p>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            {/* <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button> */}
        </div>
    );
};

export default Product;