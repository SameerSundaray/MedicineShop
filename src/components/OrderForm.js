
import React, { useState, useEffect } from 'react';
import OrderItem from './OrderItem';
import OrderInput from './OrderInput';
import './OrderForm.css';


function OrderForm() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        setOrders(storedOrders);
    }, []);

    const handleAddToBill = (order) => {
        setOrders([...orders, order]);
    };

    const handleDeleteOrder = (index) => {
        const updatedOrders = [...orders];
        updatedOrders.splice(index, 1);
        setOrders(updatedOrders);
    };

    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders));
    }, [orders]);

    return (
        <div className="order-form">
            <OrderInput handleAddToBill={handleAddToBill} />
            <div className="order-list">
                {orders.map((order, index) => (
                    <OrderItem key={index} order={order} onDelete={() => handleDeleteOrder(index)} />
                ))}
            </div>
        </div>
    );
}

export default OrderForm;





