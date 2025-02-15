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
  Badge,
} from "react-bootstrap";
import { LuLeaf, LuWheat } from "react-icons/lu";

const ItemDetail = ({ data }) => {
  const {
    itemDetail,
    selectedImage,
    setSelectedImage,
    renderStars,
    addToFavorites,
    isFavorites,
    addToCart,
    isInCart,
    navigate,
  } = data;

  return (
    <>
      {itemDetail && (
        <div
          className="body-item-detail min-vh-100"
          style={{ backgroundColor: "#FFF9F5" }}
        >
          {/* Hero Section with Product Info */}
          <div className="bg-white shadow-sm mb-5">
            <Container className="py-5">
              <Row className="align-items-center">
                {/* Image Gallery */}
                <Col lg={6} className="mb-4 mb-lg-0">
                  <div className="position-relative">
                    <img
                      src={itemDetail.imagen[selectedImage]}
                      alt={itemDetail.nombre}
                      className="w-100 rounded-3 shadow-lg"
                      style={{
                        height: "500px",
                        objectFit: "cover",
                        borderRadius: "30px",
                      }}
                    />
                    <Button
                      variant={isFavorites(itemDetail.id) ? "danger" : "light"}
                      className="position-absolute top-0 end-0 m-2 rounded-circle p-2"
                      onClick={() => addToFavorites(itemDetail)}
                      style={{ width: "40px", height: "40px", zIndex: 1 }}
                    >
                      <BsHeart
                        size={20}
                        color={isFavorites(itemDetail.id) ? "white" : "red"}
                      />
                    </Button>
                  </div>
                  <Row className="mt-3 g-2">
                    {itemDetail.imagen.map((img, index) => (
                      <Col xs={3} key={index}>
                        <img
                          src={img}
                          alt={`${itemDetail.nombre} ${index + 1}`}
                          className={`img-thumbnail cursor-pointer ${
                            selectedImage === index ? "border-custom" : ""
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
                    <Badge className="badge-detail">Destacado</Badge>
                    <h1 className="nombre-detail">{itemDetail.nombre}</h1>
                    {/* <div className="rating-detail">
                      <div className="me-3">
                        {renderStars(itemDetail.rating)}
                      </div>
                      <span className="reviews-detail ">
                        ({itemDetail.reviews} reseñas)
                      </span>
                    </div> */}
                    <h2 className="precio-detail">${itemDetail.precio}</h2>
                    <div className="preparacion-detail">
                      <BsClock size={20} className="me-2" />
                      <span className="text-muted">
                        Preparación: 24h de anticipación
                      </span>
                    </div>
                    <div className="porciones-detail">
                      <LuWheat size={20} className="me-2" />
                      <span className="text-muted">{itemDetail.porciones}</span>
                    </div>
                    <p className="descripcion-detail lead">
                      {itemDetail.descripcion}
                    </p>
                    <div className="d-grid gap-2">
                      {isInCart(itemDetail.id) ? (
                        <Button
                          size="lg"
                          className="button-view-cart-detail rounded-pill"
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            navigate("/cart");
                          }}
                        >
                          ver carrito
                        </Button>
                      ) : (
                        <Button
                          size="lg"
                          className="button-add-detail rounded-pill"
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            addToCart(itemDetail);
                          }}
                        >
                          <BsCart3 size={20} />
                          Añadir al Carrito
                        </Button>
                      )}
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
                  style={{ borderRadius: "20px" }}
                >
                  <Card.Body className="p-5">
                    <h3
                      className="text-center mb-4"
                      style={{ color: "#4A4A4A" }}
                    >
                      Características Especiales
                    </h3>
                    <ListGroup variant="flush">
                      {itemDetail.caracteristicas.map((feature, index) => (
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
          {/* <Container className="pb-5">
            <Row className="justify-content-center">
              <Col lg={8}>
                <Card
                  className="border-0 shadow-sm mb-4"
                  style={{ borderRadius: "20px", backgroundColor: "#FFF9F5" }}
                >
                  <Card.Body className="p-5">
                    <h3
                      className="text-center mb-4"
                      style={{ color: "#4A4A4A" }}
                    >
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
                          style={{
                            backgroundColor: "white",
                            borderRadius: "15px",
                          }}
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
                {itemDetail.comentarios.map((comment, index) => (
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
                        <h5
                          className="mb-0 fw-bold"
                          style={{ color: "#4A4A4A" }}
                        >
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
          </Container> */}
        </div>
      )}
    </>
  );
};
export default ItemDetail;
