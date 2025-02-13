import { useContext } from "react";
import Favorites from "./Favorites";
import { FavoritesContext } from "../../../context/FavoritesContext";

const FavoritesLogic = () => {
  const { favorite, addToFavorites, isFavorites } =
    useContext(FavoritesContext);

  let data = { favorite, addToFavorites, isFavorites };
  return (
    <>
      <Favorites data={data} />
    </>
  );
};

export default FavoritesLogic;
