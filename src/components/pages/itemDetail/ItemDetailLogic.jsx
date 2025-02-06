import ItemDetail from "./ItemDetail.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "../../../data/ProductMock.js";
import { BsStar } from "react-icons/bs";

const ItemDetailLogic = () => {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

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
    isWishlisted,
    setIsWishlisted,
    renderStars,
  };
  return (
    <>
      <ItemDetail data={data} />
    </>
  );
};

export default ItemDetailLogic;
