import "@/styles/globals.css";
import { useState, createContext } from "react";
import AppContext from "../../components/AppContext";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  };
  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId ? { ...item, qty: newQuantity } : item
      )
    );
  };
  console.log(cart, "cart");
  return (
    <AppContext.Provider
      value={{ cart, addToCart, removeFromCart, totalPrice, updateQuantity }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
