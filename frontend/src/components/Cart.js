import React from 'react';
import { useCart } from './CardContext';

export default function Cart() {
    const { cartItems, calculateTotal, removeFromCart } = useCart();

    return (
        <div className="container mt-5">
            <h1>Your Cart</h1>
            <div className="table-responsive">
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Size</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <img
                                        src={item.ImgSrc}
                                        alt={item.foodName}
                                        style={{ width: '100px', height: 'auto' }}
                                    />
                                </td>
                                <td>{item.foodName}</td>
                                <td>{item.size}</td>
                                <td>{item.quantity}</td>
                                <td>${item.price * item.quantity}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => removeFromCart(item.id, item.size)}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-4">
                <h3>Total Expenses: ${calculateTotal().toFixed(2)}</h3>
            </div>
        </div>
        
    );
}
