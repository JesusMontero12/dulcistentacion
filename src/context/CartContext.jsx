import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const isInCart = (id) => {
    let validatedProduct = cart.some((product) => product.id === id);
    return validatedProduct;
  };

  const addToCart = (product) => {
    const exist = isInCart(product.id);
    if (exist) {
      const newArray = cart.map((elemento) =>
        elemento.id === product.id
          ? { ...elemento, cantidad: product.cantidad }
          : elemento
      );
      setCart(newArray);
    } else {
      setCart([...cart, { ...product, cantidad: product.cantidad || 1 }]);
    }
  };

  const deleteById = (id) => {
    const newArray = cart.filter((product) => product.id !== id);
    setCart(newArray);
  };

  const getTotalItems = () => {
    let total = cart.reduce((acc, product) => {
      return acc + product.cantidad;
    }, 0);
    return total;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, product) => {
      return acc + product.cantidad * product.precio;
    }, 0);
    return total;
  };

  const clearCart = () => {
    setCart([]);
  };

  let data = {
    cart,
    setCart,
    addToCart,
    getTotalItems,
    getTotalPrice,
    deleteById,
    clearCart,
    isInCart,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
