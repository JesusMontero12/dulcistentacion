import "./Home.css";
import InfoCardLogic from "../../common/infoCard/InfoCardLogic.jsx";
import { Button, Container } from "react-bootstrap";
import ProductCardLogic from "../../features/productsCard/ProductCardLogic.jsx";
import { Link } from "react-router-dom";

const Home = ({ data }) => {
  const { product } = data;
  const displayProduct = Array.isArray(product) ? product.slice(0, 3) : [];

  return (
    <>
      <Container fluid className="m-0 p-0 body-home">
        {/* Section Home */}
        <section className="hero-section">
          <div className="container">
            <div className="col-md-8 col-lg-6">
              <h1 className="hero-title display-4 mb-4">Dulcis'Tentación</h1>
              <p className="lead mb-4">
                Tentación que deleita, sabor que enamora.
              </p>
              <Link to="/products" className="link-explorar">
                Explorar Menú
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products */}

        <section className="py-5" id="menu">
          <div className="container">
            <h2 className="section-title-home">Nuestras Delicias</h2>
            <ProductCardLogic prod={displayProduct} />

            {/* Botón "Ver más" si hay más de 3 productos */}
            {product.length > 3 && (
              <div className="text-center mt-4">
                <Link to="/products" className="link-vermas">
                  Ver más
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Info Section */}
        <InfoCardLogic />
      </Container>
    </>
  );
};

export default Home;
