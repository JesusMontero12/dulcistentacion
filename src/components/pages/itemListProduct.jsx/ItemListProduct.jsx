import "./ItemListProduct.css";
import ProductCardLogic from "../../features/productsCard/ProductCardLogic.jsx";
import { Container } from "react-bootstrap";

const ItemListProduct = () => {
  return (
    <>
      <Container fluid className="body-item-list">
        <div className="p-3">
          <ProductCardLogic />
        </div>
      </Container>
    </>
  );
};

export default ItemListProduct;
