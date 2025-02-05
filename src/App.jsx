import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContextProvider from "./context/CartContext.jsx";
import Layouts from "./components/layouts/Layouts.jsx";
import HomeLogic from "./components/pages/home/HomeLogic.jsx";
import CartLogic from "./components/features/cart/CartLogic.jsx";
import ItemListProductLogic from "./components/pages/itemListProduct.jsx/ItemListProductLogic.jsx";
import ItemDetailLogic from "./components/pages/itemDetail/ItemDetailLogic.jsx";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layouts />}>
            <Route path="/" element={<HomeLogic />} />
            <Route path="/cart" element={<CartLogic />} />
            <Route path="/products" element={<ItemListProductLogic />} />
            <Route path="/product/:id" element={<ItemDetailLogic />} />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
