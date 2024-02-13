
import React from 'react';
import './OrderForm.css';

function OrderItem({ order, onDelete }) {
    return (
        <div>
            <span>{order.table}: {order.price} - {order.dish}</span>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default OrderItem;
