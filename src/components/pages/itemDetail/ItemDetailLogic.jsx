import ItemDetail from "./ItemDetail.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { products } from "../../../data/ProductMock.js";
import { BsStar } from "react-icons/bs";
import { CartContext } from "../../../context/CartContext.jsx";
import { FavoritesContext } from "../../../context/FavoritesContext.jsx";

const ItemDetailLogic = () => {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToFavorites, isFavorites } = useContext(FavoritesContext);
  const { addToCart, isInCart } = useContext(CartContext);
  const navigate = useNavigate();

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <BsStar
        key={index}
        size={20}
        fill={index < Math.floor(rating) ? "#ffc107" : "none"}
        color={index < Math.floor(rating) ? "#ffc107" : "#6c757d"}
      />
    ));
  };

  useEffect(() => {
    const productDetail = products.find((item) => item.id === Number(id));
    setItemDetail(productDetail || {});
  }, [id, itemDetail]);

  let data = {
    itemDetail,
    selectedImage,
    setSelectedImage,
    renderStars,
    addToFavorites,
    isFavorites,
    addToCart,
    isInCart,
    navigate,
  };
  return (
    <>
      <ItemDetail data={data} />
    </>
  );
};

export default ItemDetailLogic;
