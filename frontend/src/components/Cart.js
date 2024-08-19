import React, { useEffect, useCallback } from 'react';
import { useCart } from './CardContext';

export default function Cart() {
    const { cartItems, removeFromCart } = useCart();

    // Calculate total price
    const calculateTotal = useCallback(() => {
        const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        return total;
    }, [cartItems]);

    useEffect(() => {
        console.log("Cart updated:", cartItems);
        console.log("Total price:", calculateTotal());
    }, [cartItems, calculateTotal]);

    const handleRemove = (id, size) => {
        console.log("Removing item with id:", id, "and size:", size); // Debugging
        removeFromCart(id, size);
    };

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
                                        alt={item.name || "Food Image"}
                                        style={{ width: '100px', height: 'auto' }}
                                    />
                                </td>
                                <td>{item.name || "No name found"}</td>
                                <td>{item.size}</td>
                                <td>{item.quantity}</td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleRemove(item._id, item.size)} // Updated to use handleRemove
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