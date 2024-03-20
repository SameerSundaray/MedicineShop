import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Cart.css';

const Cart = ({ cart }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleCartToggle = () => {
        setIsCartOpen(!isCartOpen);
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.quantity * item.price), 0);
    };

    return (
        <div className="cart-container">
            <div className="cart-icon" onClick={handleCartToggle}>
                <ShoppingCartIcon />
                <span>{cart.length}</span>
            </div>
            {isCartOpen && (
                <div className="cart-modal-overlay">
                    <div className="cart-modal">
                        <div className="cart-details">
                            <h3>Cart Details</h3>
                            <ul>
                                {cart.map((item, index) => (
                                    <li key={index}>
                                        {item.name} {item.quantity} X {item.price} = {item.quantity * item.price}
                                    </li>
                                ))}
                            </ul>
                            <div className="cart-total">
                                <strong>Total: {calculateTotalPrice()}</strong>
                            </div>
                        </div>
                        <div className="cart-close" onClick={handleCartToggle}>Close</div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;








