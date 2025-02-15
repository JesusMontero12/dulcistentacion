import "./Favorites.css";
import {
  BsCake,
  BsCart3,
  BsFillMenuButtonWideFill,
  BsHeart,
  BsTrash3,
} from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa";

import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Favorites = ({ data }) => {
  const { favorite, addToFavorites, isFavorites } = data;
  return (
    <>
      <Container className="py-5">
        <Card className="border-0 shadow-sm">
          <Card.Header className="bg-white border-0 py-4">
            <h3 className="mb-0 d-flex align-items-center">
              <BsFillMenuButtonWideFill className="me-2" size={24} />
              Mi lista de Favoritos
              <Badge bg="dark" className="ms-2 rounded-pill">
                {favorite.length}
              </Badge>
            </h3>
          </Card.Header>
          <Card.Body className="px-4">
            {favorite.map((item) => (
              <Row key={item.id} className="mb-4 align-items-center">
                <Col xs={12} md={4}>
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="img-fluid rounded"
                    style={{
                      objectFit: "cover",
                      height: "80px",
                      width: "80px",
                    }}
                  />
                </Col>
                <Col xs={12} md={4}>
                  <h5 className="mb-1">{item.nombre}</h5>
                  <p className="text-muted mb-0">${item.precio}</p>
                </Col>
                <Col xs={12} md={4} className="mt-3 mt-md-0">
                  <div className="d-flex align-items-center justify-content-start justify-content-md-end">
                    <Button
                      variant={isFavorites(item.id) ? "danger" : "light"}
                      className=" rounded-circle p-2"
                      onClick={() => addToFavorites(item)}
                      style={{ width: "40px", height: "40px", zIndex: 1 }}
                    >
                      <BsHeart
                        size={20}
                        color={isFavorites(item.id) ? "white" : "red"}
                      />
                    </Button>
                  </div>
                </Col>
              </Row>
            ))}

            {favorite.length === 0 && (
              <div className="text-center py-5">
                <BsCake size={48} className="text-muted mb-3" />
                <h5 className="text-muted">Tu lista de favoritos está vacía</h5>
                <p className="text-muted mb-0">
                  ¡Agrega algunos deliciosos postres a tu lista!
                </p>
                <Link to="/products" className="link-menu-favorite">
                  Ver Menú
                </Link>
              </div>
            )}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Favorites;
