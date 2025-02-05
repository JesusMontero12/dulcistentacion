import { useState } from "react";
import Cart from "./Cart.jsx";

const CartLogic = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Pastel de Chocolate",
      price: 28.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Cupcakes Red Velvet",
      price: 15.99,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=800&q=80",
    },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(
      cartItems
        .map((item) => {
          if (item.id === id) {
            const newQuantity = Math.max(0, item.quantity + change);
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  let data = { cartItems, updateQuantity, total };
  return (
    <>
      <Cart data={data} />
    </>
  );
};

export default CartLogic;
