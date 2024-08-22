import React, { createContext, useState, useContext, useCallback } from 'react';

// Create the context
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => {
    return useContext(CartContext);
};

// Cart provider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item, quantity, size, price) => {
        const cartCopy = [...cartItems];
        const existingItemIndex = cartCopy.findIndex(
          (cartItem) => cartItem._id === item._id && cartItem.size === size
        );

        if (existingItemIndex >= 0) {
            cartCopy[existingItemIndex].quantity += quantity;
        } else {
            const newItem = { ...item, quantity, size, price };
            cartCopy.push(newItem);
        }

        setCartItems(cartCopy);
    };

    const clearCart = () => {
        setCartItems([]); // Clears the cart by setting an empty array
    };

    const calculateTotal = useCallback(() => {
        return cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }, [cartItems]);

    const removeFromCart = (id, size) => {
        setCartItems(cartItems.filter(item => !(item._id === id && item.size === size)));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, clearCart, calculateTotal, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};