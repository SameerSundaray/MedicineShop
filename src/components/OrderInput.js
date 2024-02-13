import React, { useState } from 'react';

function OrderInput({ handleAddToBill }) {
    const [uniqueId, setUniqueId] = useState('');
    const [price, setPrice] = useState('');
    const [dish, setDish] = useState('');
    const [selectedTable, setSelectedTable] = useState('');
    const [uniqueIdError, setUniqueIdError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [formError, setFormError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!uniqueId || !price || !dish || !selectedTable) {
            setFormError('Please fill out all fields');
            return;
        } else {
            setFormError('');
        }

        if (!/^\d+$/.test(uniqueId)) {
            setUniqueIdError('Please enter a valid Unique ID (Numbers only)');
            return;
        } else {
            setUniqueIdError('');
        }

        if (!/^\d+(\.\d{1,2})?$/.test(price)) {
            setPriceError('Please enter a valid Price');
            return;
        } else {
            setPriceError('');
        }
          

        const order = { uniqueId, price, dish, table: selectedTable };
        handleAddToBill(order);
        setUniqueId('');
        setPrice('');
        setDish('');
        setSelectedTable('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Unique ID:</label>
                <input type="text" value={uniqueId} onChange={(e) => setUniqueId(e.target.value)} />
                {uniqueIdError && <span className="error">{uniqueIdError}</span>}
            </div>
            <div>
                <label>Price:</label>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                {priceError && <span className="error">{priceError}</span>}
            </div>
            <div>
                <label>Choose Dish:</label>
                <input type="text" value={dish} onChange={(e) => setDish(e.target.value)} />
            </div>
            <div>
                <label>Choose Table:</label>
                <select value={selectedTable} onChange={(e) => setSelectedTable(e.target.value)}>
                    <option value="">Select a table</option>
                    <option value="Table 1">Table 1</option>
                    <option value="Table 2">Table 2</option>
                    <option value="Table 3">Table 3</option>
                </select>
            </div>
            <button type="submit">Add to Bill</button>
            {formError && <span className="error">{formError}</span>}
        </form>
    );
}

export default OrderInput;   



