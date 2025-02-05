import { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";
import { products } from "../../../data/ProductMock.js";

const ProductCardLogic = ({ prod }) => {
  const [product, setProduct] = useState([]);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

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
    isLiked,
    setIsLiked,
  };
  return (
    <>
      <ProductCard data={data} />
    </>
  );
};

export default ProductCardLogic;
