import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const categories = [
  {
    id: 1,
    title: "Electronics",
    image: "https://treemily.com/wp-content/uploads/2023/05/modern-stationary-collection-arrangement-1-scaled.jpg",
    description: "Latest gadgets and tech accessories.",
  },
  {
    id: 2,
    title: "Fashion",
    image: "https://wallpaperaccess.com/full/2489629.jpg",
    description: "Trendy clothes and accessories for all.",
  },
  {
    id: 3,
    title: "Home Appliances",
    image: "https://www.freeiconspng.com/uploads/home-appliances-png-24.jpg",
    description: "Modern appliances for a smarter home.",
  },
  {
    id: 4,
    title: "Beauty & Health",
    image: "https://www.heinens.com/wp-content/uploads/2022/08/Heinens-Health-And-Beauty-products-800x550-1.jpg",
    description: "Skincare, makeup, and wellness products.",
  },
  {
    id: 5,
    title: "Sports & Fitness",
    image: "https://hips.hearstapps.com/hmg-prod/images/best-workout-equipment-644c2a3e52617.jpg",
    description: "Gear and accessories for your active life.",
  },
  {
    id: 6,
    title: "Books & Stationery",
    image: "http://st2.depositphotos.com/1177973/7720/i/450/depositphotos_77202279-stock-photo-stack-of-books-and-stationery.jpg",
    description: "Explore books, journals, and office supplies.",
  },
];

const AppProvider = ({ children }) => {
  const [cartQty, setCartQty] = useState(() => {
    const storedCartQty = localStorage.getItem("cartQty");
    return storedCartQty ? JSON.parse(storedCartQty) : 0;
  });

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("cartQty", JSON.stringify(cartQty));
  }, [cartQty]);
  
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => {
    const existingItem = prevCart.find((item) => item.id === productId);
    if (!existingItem) return prevCart;

    if (existingItem.quantity === 1) {
      return prevCart.filter((item) => item.id !== productId);
    } else {
      return prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    }
  });
  };

  const clearCart = () => {
    setCart([]);
    setCartQty(0);
  };

  return (
    <AppContext.Provider
      value={{
        categories,
        cart,
        handleAddToCart,
        handleRemoveFromCart,
        clearCart,cartQty, setCartQty
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
