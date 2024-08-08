import React, { createContext, useState, useContext } from 'react';

// Create the context
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => {
    return useContext(CartContext);
};

// Cart provider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Function to add items to the cart
    const addToCart = (item, quantity, size, price) => {
        const existingItemIndex = cartItems.findIndex(
            (cartItem) => cartItem.id === item.id && cartItem.size === size
        );

        if (existingItemIndex >= 0) {
            // If item already exists in cart, update quantity
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += quantity;
            setCartItems(updatedCartItems);
        } else {
            // If item is new, add to cart
            setCartItems([...cartItems, { ...item, quantity, size, price }]);
        }
    };

    // Function to calculate total price
    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    // Function to remove item from cart
    const removeFromCart = (id, size) => {
        setCartItems(cartItems.filter(item => !(item.id === id && item.size === size)));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, calculateTotal, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
