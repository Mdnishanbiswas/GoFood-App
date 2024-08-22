import React, { useEffect, useCallback, useState } from 'react';
import { useCart } from './CardContext';

export default function Cart() {
    const { cartItems, removeFromCart, clearCart } = useCart(); // Access clearCart function
    const [orderPlaced, setOrderPlaced] = useState(false);

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
        removeFromCart(id, size);
    };

    const handleOrder = () => {
        // Check if the cart has items before placing an order
        if (cartItems.length > 0) {
            localStorage.setItem('orders', JSON.stringify(cartItems)); // Store the order
            setOrderPlaced(true); // Show confirmation
            clearCart(); // Clear the cart after placing the order
        }
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
                                        onClick={() => handleRemove(item._id, item.size)} 
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
            <button className="btn btn-primary mt-3" onClick={handleOrder}>
                Place Order
            </button>
            {orderPlaced && <div className="alert alert-success mt-3">Order Placed Successfully!</div>}
        </div>
    );
}