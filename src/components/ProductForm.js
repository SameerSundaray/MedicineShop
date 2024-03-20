import React, { useState } from 'react';

const ProductForm = ({ addProduct }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        quantity: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(formData);
        setFormData({
            name: '',
            description: '',
            price: '',
            quantity: ''
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Medicine Name" value={formData.name} onChange={handleChange} />
            <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
            <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
            <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} />
            <button type="submit">Add Product</button>
        </form>
    );
}

export default ProductForm;
