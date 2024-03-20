import React, { useState } from 'react';
import Header from './components/Header';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const addProduct = (product) => {
        const newProduct = { ...product, id: new Date().getTime().toString() };
        setProducts([...products, newProduct]);
    }

    const addToCart = (product) => {
        const existingProductIndex = cart.findIndex(item => item.id === product.id);

        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            const newCartItem = { ...product, quantity: 1 };
            setCart([...cart, newCartItem]);
        }
    }

    const addToBill = (product) => {
        const updatedProducts = products.map(item => {
            if (item.id === product.id) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }).filter(item => item.quantity > 0);
        setProducts(updatedProducts);

        addToCart(product); // Add the product to the cart
    }

    return (
        <div>
            <Header />
            <ProductForm addProduct={addProduct} />
            <ProductList products={products} addToBill={addToBill} />
            <Cart cart={cart} />
        </div>
    );
}

export default App;
