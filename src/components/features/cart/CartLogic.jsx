import { useContext, useEffect, useState } from "react";
import Cart from "./Cart.jsx";
import { CartContext } from "../../../context/CartContext.jsx";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CartLogic = () => {
  const { cart, setCart, getTotalItems, getTotalPrice, deleteById, clearCart } =
    useContext(CartContext);
  let totalProd = getTotalItems();
  let total = getTotalPrice();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const messageClearCart = (msj) => {
    Swal.fire({
      title: "¡Espera!",
      text: msj,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Continuar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          icon: "success",
          title: "¡Genial!",
          text: "Ya puedes hacer compras nuevas.",
          showConfirmButton: false,
          timer: 3500,
        });
      }
    });
  };

  const messageDelete = (msj, img, id) => {
    Swal.fire({
      imageUrl: img,
      imageHeight: 100,
      title: "¡Espera!",
      text: msj,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Continuar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteById(id);
        Swal.fire({
          icon: "success",
          title: "¡Genial!",
          text: "Producto eliminado con exito",
          showConfirmButton: false,
          timer: 3500,
        });
      }
    });
  };

  const updateQuantity = (id, change) => {
    setCart(
      cart
        .map((item) => {
          if (item.id === id) {
            const newQuantity = Math.max(0, item.cantidad + change);
            return { ...item, cantidad: newQuantity };
          }
          return item;
        })
        .filter((item) => item.cantidad > 0)
    );
  };

  let data = {
    cart,
    updateQuantity,
    total,
    totalProd,
    deleteById,
    messageDelete,
    messageClearCart,
    navigate,
  };
  return (
    <>
      <Cart data={data} />
    </>
  );
};

export default CartLogic;
