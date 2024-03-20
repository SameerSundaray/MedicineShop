import React from 'react';
import './ProductList.css';

const ProductList = ({ products, addToBill }) => {
    return (
        <div className="product-list">
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <div className="product-info">
                            <span>{product.name} - {product.description} - {product.price} - {product.quantity}</span>
                            <button onClick={() => addToBill(product)}>Add to Bill</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;


