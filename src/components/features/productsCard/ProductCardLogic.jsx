import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";
import { products } from "../../../data/ProductMock.js";
import { FavoritesContext } from "../../../context/FavoritesContext.jsx";
import { CartContext } from "../../../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";

const ProductCardLogic = ({ prod }) => {
  const [product, setProduct] = useState([]);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const { addToFavorites, isFavorites } = useContext(FavoritesContext);
  const { addToCart, isInCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleHover = (id, isHovering) => {
    if (isHovering) {
      setHoveredProductId(id);
    } else {
      setHoveredProductId(null);
    }
  };

  useEffect(() => {
    setProduct(products);
  }, []);

  let data = {
    product,
    handleHover,
    hoveredProductId,
    prod,
    addToFavorites,
    isFavorites,
    addToCart,
    isInCart,
    navigate,
  };
  return (
    <>
      <ProductCard data={data} />
    </>
  );
};

export default ProductCardLogic;
