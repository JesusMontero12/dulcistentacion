import "./ItemListProduct.css";
import ProductCardLogic from "../../features/productsCard/ProductCardLogic.jsx";

const ItemListProduct = () => {
  return (
    <>
      <div className="m-5 p-3">
        <ProductCardLogic />
      </div>
    </>
  );
};

export default ItemListProduct;
