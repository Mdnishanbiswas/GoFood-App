import React, { useEffect, useState } from 'react';

export default function MyOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Retrieve orders from local storage
        const savedOrders = localStorage.getItem('orders');
        if (savedOrders) {
            setOrders(JSON.parse(savedOrders));
        }
    }, []);

    return (
        <div className="container mt-5">
            <h1>My Orders</h1>
            {orders.length === 0 ? (
                <p>You have no orders yet.</p>
            ) : (
                <div className="table-responsive">
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Size</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((item, index) => (
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
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}