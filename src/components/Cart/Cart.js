import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    let quantity = 0;
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping
    }
    const tax = parseFloat((total * 10 / 100).toFixed(2))
    // also u can use parseInt instead of parseFloat 
    const grandTotal = total + shipping + tax

    return (
        <div className='cart'>
            <h3>Order Summery</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total price:${total}</p>
            <p>Total Shipping:{shipping}</p>
            <p>Tax:{tax}</p>
            <h5>Grand Total:{grandTotal}</h5>
        </div>
    );
};

export default Cart;