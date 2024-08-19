import React, { createContext, useState, useContext ,useCallback} from 'react';

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
        // Clone the cart to avoid mutating state directly
        const cartCopy = [...cartItems];
      
        // Check if the item already exists in the cart with the same ID and size
        const existingItemIndex = cartCopy.findIndex(
          (cartItem) => cartItem._id === item._id && cartItem.size === size
        );
      
        if (existingItemIndex >= 0) {
          // If item exists, update the quantity
          cartCopy[existingItemIndex].quantity += quantity;
        } else {
          // Add new item to the cart
          const newItem = {
            ...item,
            quantity,
            size,
            price,
          };
          cartCopy.push(newItem);
        }
      
        // Update the cart state with the new cart data
        setCartItems(cartCopy);
      };
      
      
    
    
    

    // Function to calculate total price
    const calculateTotal = useCallback(() => {
        return cartItems.reduce((acc, item) => {
            return acc + (item.price * item.quantity);
        }, 0);
    }, [cartItems]);

    // Function to remove item from cart
    const removeFromCart = (id, size) => {
      setCartItems(cartItems.filter(item => !(item._id === id && item.size === size)));
  };
  

    return (
        <CartContext.Provider value={{ cartItems, addToCart, calculateTotal, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};