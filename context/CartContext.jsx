"use client";

import {
  createContext,
  useEffect,
  useState,
} from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // ================= LOAD CART =================
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);


  // ================= SAVE CART =================
  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);


  // ================= ADD TO CART =================
  const addToCart = (product, size = "M") => {
    const cartId = `${product.id}-${size}`;

    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.cartId === cartId
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.cartId === cartId
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prevItems,
        {
          ...product,
          cartId,
          size,
          quantity: 1,
        },
      ];
    });
  };


  // ================= UPDATE QUANTITY =================
  const updateQuantity = (cartId, quantity) => {
    if (quantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.cartId === cartId
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  };


  // ================= REMOVE =================
  const removeFromCart = (cartId) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => item.cartId !== cartId
      )
    );
  };


  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}