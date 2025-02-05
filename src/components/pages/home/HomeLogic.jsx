import { useEffect, useState } from "react";
import Home from "./Home.jsx";
import { products } from "../../../data/ProductMock.js";

const HomeLogic = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(products);
  }, []);

  let data = { product };
  return (
    <>
      <Home data={data} />
    </>
  );
};

export default HomeLogic;
