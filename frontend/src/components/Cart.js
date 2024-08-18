import React, { useEffect, useCallback } from 'react';
import { useCart } from './CardContext';

export default function Cart() {
    const { cartItems, removeFromCart } = useCart();

    const calculateTotal = useCallback(() => {
        const total = cartItems.reduce((acc, item) => {
            return acc + (item.price * item.quantity);
        }, 0);
        return total;
    }, [cartItems]); // useCallback memoizes the function

    useEffect(() => {
        console.log("Cart updated:", cartItems); 
        console.log("Total price:", calculateTotal()); 
    }, [cartItems, calculateTotal]);  // Dependency on cartItems and memoized calculateTotal

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
                                        src={item.img}
                                        alt={item.foodName}
                                        style={{ width: '100px', height: 'auto' }}
                                    />
                                </td>
                                <td>{item.foodName}</td>
                                <td>{item.size}</td>
                                <td>{item.quantity}</td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => removeFromCart(item._id, item.size)}
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
                <h3>Total Price: ${calculateTotal().toFixed(2)}</h3>
            </div>
        </div>
    );
}

