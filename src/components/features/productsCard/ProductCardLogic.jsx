import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";
import { products } from "../../../data/ProductMock.js";
import { FavoritesContext } from "../../../context/FavoritesContext.jsx";

const ProductCardLogic = ({ prod }) => {
  const [product, setProduct] = useState([]);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const { addToFavorites, isFavorites } = useContext(FavoritesContext);

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
  };
  return (
    <>
      <ProductCard data={data} />
    </>
  );
};

export default ProductCardLogic;
