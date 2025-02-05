import "./ProductCard.css";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { LuWheat } from "react-icons/lu";
import {
  BsCart3,
  BsHeart,
  BsStar,
  BsStarFill,
  BsStarHalf,
} from "react-icons/bs";

const ProductCard = ({ data }) => {
  const { product, handleHover, hoveredProductId, prod, isLiked, setIsLiked } =
    data;

  return (
    <>
      <Container fluid className="px-3 px-sm-4 px-lg-5 py-4 py-lg-5">
        <Row xs={1} sm={2} md={3} xl={3} className="g-3 g-md-4">
          {prod
            ? prod.map((item) => (
                <Col key={item.id} className="d-flex align-items-center">
                  <Card
                    key={item.id}
                    className="h-100 w-100 border-0 shadow-sm"
                    style={{
                      transform: hoveredProductId
                        ? "translateY(-10px)"
                        : "translateY(0)",
                      transition: "transform 0.3s ease-in-out",
                      borderRadius: "15px",
                      overflow: "hidden",
                    }}
                    onMouseEnter={() => handleHover(item.id, true)}
                    onMouseLeave={() => handleHover(item.id, false)}
                  >
                    <div className="position-relative">
                      <div
                        className="aspect-ratio"
                        style={{ paddingBottom: "75%", overflow: "hidden" }}
                      >
                        <Card.Img
                          src={item.imagen}
                          className="position-absolute w-100 h-100"
                          style={{
                            objectFit: "cover",
                            top: 0,
                            left: 0,
                            transform: hoveredProductId
                              ? "scale(1.1)"
                              : "scale(1)",
                            transition: "transform 0.3s ease-in-out",
                          }}
                        />
                      </div>
                      <Button
                        variant={isLiked ? "danger" : "light"}
                        className="position-absolute top-0 end-0 m-2 rounded-circle p-2"
                        onClick={() => setIsLiked(!isLiked)}
                        style={{ width: "40px", height: "40px", zIndex: 1 }}
                      >
                        <BsHeart size={20} color={isLiked ? "white" : "red"} />
                      </Button>
                    </div>

                    <Card.Body className="d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <Card.Title className="mb-0 fs-5 text-break">
                          {item.nombre.slice(0, 14) + "..."}
                        </Card.Title>
                        <Badge bg="primary" pill className="ms-2 fs-6">
                          ${item.precio}
                        </Badge>
                      </div>
                      <Card.Text className="text-muted small flex-grow-1">
                        {item.descripcion.slice(0, 40) + "..."}
                      </Card.Text>

                      <div className="d-flex align-items-center mb-2">
                        <LuWheat size={20} className="me-2" />
                        <span className="text-muted">{item.porciones}</span>
                      </div>

                      <div className="mt-2">
                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                          <div className="ratings">
                            {[...Array(5)].map((_, index) => {
                              if (index + 1 <= item.rating) {
                                return (
                                  <BsStarFill
                                    key={index}
                                    className="text-warning"
                                  />
                                );
                              } else if (index + 0.5 < item.rating) {
                                return (
                                  <BsStarHalf
                                    key={index}
                                    className="text-warning"
                                  />
                                );
                              } else {
                                return (
                                  <BsStar
                                    key={index}
                                    className="text-warning"
                                  />
                                );
                              }
                            })}
                          </div>

                          <span className="text-muted small">
                            ({item.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    </Card.Body>

                    <Card.Footer className="bg-white border-0 p-3">
                      <Button
                        variant="primary"
                        className="w-100 d-flex align-items-center justify-content-center gap-2 py-2"
                      >
                        <BsCart3 size={20} />
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              ))
            : product.map((item) => (
                <Col key={item.id} className="d-flex align-items-center">
                  <Card
                    className="h-100 w-100 border-0 shadow-sm"
                    style={{
                      transform: hoveredProductId
                        ? "translateY(-10px)"
                        : "translateY(0)",
                      transition: "transform 0.3s ease-in-out",
                      borderRadius: "15px",
                      overflow: "hidden",
                    }}
                    onMouseEnter={() => handleHover(item.id, true)}
                    onMouseLeave={() => handleHover(item.id, false)}
                  >
                    <div className="position-relative">
                      <div
                        className="aspect-ratio"
                        style={{ paddingBottom: "75%", overflow: "hidden" }}
                      >
                        <Card.Img
                          src={item.imagen}
                          className="position-absolute w-100 h-100"
                          style={{
                            objectFit: "cover",
                            top: 0,
                            left: 0,
                            transform: hoveredProductId
                              ? "scale(1.1)"
                              : "scale(1)",
                            transition: "transform 0.3s ease-in-out",
                          }}
                        />
                      </div>
                      <Button
                        variant={isLiked ? "danger" : "light"}
                        className="position-absolute top-0 end-0 m-2 rounded-circle p-2"
                        onClick={() => setIsLiked(!isLiked)}
                        style={{ width: "40px", height: "40px", zIndex: 1 }}
                      >
                        <BsHeart size={20} color={isLiked ? "white" : "red"} />
                      </Button>
                    </div>

                    <Card.Body className="d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <Card.Title className="mb-0 fs-5 text-break">
                          {item.nombre}
                        </Card.Title>
                        <Badge bg="primary" pill className="ms-2 fs-6">
                          ${item.precio}
                        </Badge>
                      </div>
                      <Card.Text className="text-muted small flex-grow-1">
                        {item.descripcion}
                      </Card.Text>

                      <div className="d-flex align-items-center mb-4">
                        <LuWheat size={20} className="me-2" />
                        <span className="text-muted">{item.porciones}</span>
                      </div>

                      <div className="mt-3">
                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                          <div className="ratings">
                            {[...Array(5)].map((_, index) => {
                              if (index + 1 <= item.rating) {
                                return (
                                  <BsStarFill
                                    key={index}
                                    className="text-warning"
                                  />
                                );
                              } else if (index + 0.5 < item.rating) {
                                return (
                                  <BsStarHalf
                                    key={index}
                                    className="text-warning"
                                  />
                                );
                              } else {
                                return (
                                  <BsStar
                                    key={index}
                                    className="text-warning"
                                  />
                                );
                              }
                            })}
                          </div>

                          <span className="text-muted small">
                            ({item.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    </Card.Body>

                    <Card.Footer className="bg-white border-0 p-3">
                      <Button
                        variant="primary"
                        className="w-100 d-flex align-items-center justify-content-center gap-2 py-2"
                      >
                        <BsCart3 size={18} />
                        <span className="fs-6">Add to Cart</span>
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductCard;
