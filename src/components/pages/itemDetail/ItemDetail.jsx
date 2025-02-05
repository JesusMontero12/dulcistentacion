import { BsCart3, BsClock, BsHeart, BsStar } from "react-icons/bs";
import "./ItemDetail.css";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Form,
  Button,
} from "react-bootstrap";
import { useState } from "react";
import { LuLeaf, LuWheat } from "react-icons/lu";

const ItemDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = {
    name: "Tarta de Chocolate Belga",
    price: 45.99,
    rating: 4.8,
    reviews: 86,
    description:
      "Deliciosa tarta artesanal elaborada con el más fino chocolate belga, rellena de mousse de chocolate negro y decorada con ganache brillante. Perfecta para ocasiones especiales.",
    portions: "8-10 porciones",
    images: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1551404973-761c73954d05?w=800&auto=format&fit=crop&q=60",
    ],
    features: [
      "Ingredientes 100% naturales",
      "Sin conservantes artificiales",
      "Elaboración artesanal diaria",
      "Chocolate belga premium",
      "Opción sin gluten disponible",
    ],
    comments: [
      {
        user: "María L.",
        rating: 5,
        comment:
          "¡Increíble! El mejor pastel de chocolate que he probado. La textura es perfecta.",
        date: "2024-02-15",
      },
      {
        user: "Carlos R.",
        rating: 5,
        comment:
          "Excelente calidad y presentación. Ideal para celebraciones especiales.",
        date: "2024-02-10",
      },
    ],
  };

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

  return (
    <div className="bg-light min-vh-100" style={{ backgroundColor: "#FFF9F5" }}>
      {/* Hero Section with Product Info */}
      <div className="bg-white shadow-sm mb-5">
        <Container className="py-5">
          <Row className="align-items-center">
            {/* Image Gallery */}
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="position-relative">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-100 rounded-3 shadow-lg"
                  style={{
                    height: "500px",
                    objectFit: "cover",
                    borderRadius: "30px",
                  }}
                />
                <Button
                  variant="light"
                  className="position-absolute top-0 end-0 m-3 rounded-circle p-2"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                >
                  <BsHeart
                    size={24}
                    fill={isWishlisted ? "#dc3545" : "none"}
                    color={isWishlisted ? "#dc3545" : "#6c757d"}
                  />
                </Button>
              </div>
              <Row className="mt-3 g-2">
                {product.images.map((img, index) => (
                  <Col xs={3} key={index}>
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className={`img-thumbnail cursor-pointer ${
                        selectedImage === index ? "border-warning" : ""
                      }`}
                      style={{
                        height: "80px",
                        objectFit: "cover",
                        cursor: "pointer",
                        borderRadius: "15px",
                      }}
                      onClick={() => setSelectedImage(index)}
                    />
                  </Col>
                ))}
              </Row>
            </Col>

            {/* Product Info */}
            <Col lg={6}>
              <div className="ps-lg-4">
                <span className="badge bg-warning text-dark mb-2">
                  Destacado
                </span>
                <h1
                  className="display-4 fw-bold mb-3"
                  style={{ color: "#4A4A4A" }}
                >
                  {product.name}
                </h1>
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">{renderStars(product.rating)}</div>
                  <span className="text-muted">
                    ({product.reviews} reseñas)
                  </span>
                </div>
                <h2
                  className="display-5 fw-bold mb-4"
                  style={{ color: "#FF6B6B" }}
                >
                  ${product.price}
                </h2>
                <div className="d-flex align-items-center mb-4">
                  <BsClock size={20} className="me-2" />
                  <span className="text-muted">
                    Preparación: 24h de anticipación
                  </span>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <LuWheat size={20} className="me-2" />
                  <span className="text-muted">{product.porciones}</span>
                </div>
                <p className="lead mb-4" style={{ color: "#666" }}>
                  {product.description}
                </p>
                <div className="d-grid gap-2">
                  <Button
                    variant="warning"
                    size="lg"
                    className="rounded-pill"
                    style={{
                      backgroundColor: "#FF6B6B",
                      borderColor: "#FF6B6B",
                      color: "white",
                    }}
                  >
                    <BsCart3 className="me-2" size={20} />
                    Añadir al Carrito
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="mb-5">
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card
              className="border-0 shadow-sm"
              style={{ borderRadius: "20px", backgroundColor: "#FFF9F5" }}
            >
              <Card.Body className="p-5">
                <h3 className="text-center mb-4" style={{ color: "#4A4A4A" }}>
                  Características Especiales
                </h3>
                <ListGroup variant="flush">
                  {product.features.map((feature, index) => (
                    <ListGroup.Item
                      key={index}
                      className="border-0 py-3"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <div className="d-flex align-items-center">
                        <div
                          className="rounded-circle p-2 me-3"
                          style={{ backgroundColor: "#FF6B6B" }}
                        >
                          <LuLeaf size={20} className="text-white" />
                        </div>
                        <span className="fs-5" style={{ color: "#666" }}>
                          {feature}
                        </span>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Reviews Section */}
      <Container className="pb-5">
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card
              className="border-0 shadow-sm mb-4"
              style={{ borderRadius: "20px", backgroundColor: "#FFF9F5" }}
            >
              <Card.Body className="p-5">
                <h3 className="text-center mb-4" style={{ color: "#4A4A4A" }}>
                  Escribe una Reseña
                </h3>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Calificación</Form.Label>
                    <div className="mb-3">{renderStars(5)}</div>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Tu Comentario</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      className="border-0"
                      style={{ backgroundColor: "white", borderRadius: "15px" }}
                    />
                  </Form.Group>
                  <div className="d-grid">
                    <Button
                      variant="warning"
                      type="submit"
                      className="rounded-pill"
                      style={{
                        backgroundColor: "#FF6B6B",
                        borderColor: "#FF6B6B",
                        color: "white",
                      }}
                    >
                      Enviar Reseña
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>

            <h3 className="text-center mb-4" style={{ color: "#4A4A4A" }}>
              Opiniones de Clientes
            </h3>
            {product.comments.map((comment, index) => (
              <Card
                key={index}
                className="border-0 shadow-sm mb-3"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#FFF9F5",
                }}
              >
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="mb-0 fw-bold" style={{ color: "#4A4A4A" }}>
                      {comment.user}
                    </h5>
                    <small className="text-muted">{comment.date}</small>
                  </div>
                  <div className="mb-2">{renderStars(comment.rating)}</div>
                  <p className="mb-0 lead" style={{ color: "#666" }}>
                    {comment.comment}
                  </p>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ItemDetail;
