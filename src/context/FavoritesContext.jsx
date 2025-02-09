import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
  const [favorite, setFavorite] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorite));
  }, [favorite]); // 🔥 Se asegura que se guarde cuando cambia el estado

  const addToFavorites = (product) => {
    setFavorite((prev) => {
      const isFav = prev.some((fav) => fav.id === product.id);
      return isFav
        ? prev.filter((fav) => fav.id !== product.id) // Eliminar
        : [...prev, product]; // Agregar
    });
  };

  const isFavorites = (productId) => {
    return favorite.some((fav) => fav.id === productId);
  };

  let data = { favorite, addToFavorites, isFavorites };
  return (
    <FavoritesContext.Provider value={data}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
