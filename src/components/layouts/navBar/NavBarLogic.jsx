import { useContext, useState } from "react";
import NavBar from "./NavBar.jsx";
import { FavoritesContext } from "../../../context/FavoritesContext.jsx";
import { CartContext } from "../../../context/CartContext.jsx";

const NavBarLogic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { favorite } = useContext(FavoritesContext);
  const { cart } = useContext(CartContext);

  let dataFavorite = favorite.length;
  let dataCart = cart.length;

  let data = { isOpen, setIsOpen, dataFavorite, dataCart };
  return <NavBar data={data} />;
};

export default NavBarLogic;
