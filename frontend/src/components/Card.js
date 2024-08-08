import React, { useState } from 'react';
import { useCart } from './CardContext';

export default function Card({ foodName, item, options, ImgSrc }) {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('half');

    const handleAddToCart = () => {
        const selectedPrice = size === 'half' ? options.half : options.full;
        addToCart(item, quantity, size, selectedPrice);
    };

    return (
        <div className="card mb-3 bg-dark text-white" style={{ maxWidth: "18rem" }}>
            <img src={ImgSrc} className="card-img-top" alt={foodName} style={{ maxHeight: "200px", objectFit: "cover" }} />
            <div className="card-body">
                <h5 className="card-title">{foodName}</h5>
                <p className="card-text">{item.description}</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <select
                        className='form-select'
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                    >
                        {Array.from(Array(6), (e, i) => (
                            <option key={i + 1} value={i + 1}> {i + 1} </option>
                        ))}
                    </select>
                    <select
                        className='form-select'
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                    >
                        <option value="half">Half</option>
                        <option value="full">Full</option>
                    </select>
                </div>
                <div className='mt-3'>
                    <h6 className='d-inline'>Total Price: </h6>
                    <span>{size === 'half' ? options.half : options.full}</span>
                </div>
                <button className='btn btn-success mt-2' onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}