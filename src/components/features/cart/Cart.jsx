import "./Cart.css";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { BsCake, BsCart3, BsTrash3 } from "react-icons/bs";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = ({ data }) => {
  const {
    cart,
    updateQuantity,
    total,
    totalProd,
    messageDelete,
    messageClearCart,
    navigate,
  } = data;
  return (
    <Container className="py-5">
      <Card className="border-0 shadow-sm">
        <Card.Header className="d-flex justify-content-between bg-white border-0 py-4">
          <h3 className="mb-0 d-flex align-items-center">
            <BsCart3 className="me-2" size={24} />
            Mi Carrito
            <Badge bg="dark" className="ms-2 rounded-pill">
              {totalProd}
            </Badge>
          </h3>
          {cart.length !== 0 && (
            <Button
              variant="link"
              className="text-danger ms-3"
              onClick={() => messageClearCart("¿Quieres vaciar el carrito?")}
            >
              <FaTrash size={18} />
            </Button>
          )}
        </Card.Header>
        <Card.Body className="px-4">
          {cart.map((item) => (
            <Row key={item.id} className="mb-4 align-items-center">
              <Col xs={3} md={2}>
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="img-fluid rounded"
                  style={{ objectFit: "cover", height: "80px", width: "80px" }}
                />
              </Col>
              <Col xs={9} md={4}>
                <h5 className="mb-1">{item.nombre}</h5>
                <p className="text-muted mb-0">${item.precio}</p>
              </Col>
              <Col xs={12} md={4} className="mt-3 mt-md-0">
                <div className="d-flex align-items-center justify-content-start justify-content-md-center">
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => updateQuantity(item.id, -1)}
                    className="rounded-circle "
                  >
                    <FaMinus size={8} />
                  </Button>
                  <span className="mx-3 fw-bold">{item.cantidad}</span>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => updateQuantity(item.id, 1)}
                    className="rounded-circle "
                  >
                    <FaPlus size={8} />
                  </Button>
                  <Button
                    variant="link"
                    className="text-danger ms-3"
                    onClick={(e) => {
                      e.preventDefault();
                      messageDelete(
                        `¿Quieres eliminar "${item.nombre}" del carrito?`,
                        item.imagen[0],
                        item.id
                      );
                    }}
                  >
                    <BsTrash3 size={18} />
                  </Button>
                </div>
              </Col>
              <Col xs={12} md={2} className="text-end mt-3 mt-md-0">
                <h5 className="mb-0">
                  ${(item.precio * item.cantidad).toFixed(3)}
                </h5>
              </Col>
            </Row>
          ))}

          {cart.length === 0 && (
            <div className="text-center py-5">
              <BsCake size={48} className="text-muted mb-3" />
              <h5 className="text-muted">Tu carrito está vacío</h5>
              <p className="text-muted mb-0">
                ¡Agrega algunos deliciosos postres!
              </p>
              <Link to="/products" className="link-menu-cart">
                Ver Menú
              </Link>
            </div>
          )}
        </Card.Body>

        {cart.length > 0 && (
          <Card.Footer className="bg-white border-0 py-4">
            <Row className="align-items-center">
              <Col>
                <h4 className="mb-0">Total</h4>
              </Col>
              <Col className="text-end">
                <h4 className="mb-0">${total.toFixed(3)}</h4>
              </Col>
            </Row>
            <div className="d-grid gap-2 mt-4">
              <Button
                onClick={() => {
                  navigate("/formPay");
                }}
                className="button-cart-pago"
                size="lg"
              >
                Proceder al pago
              </Button>
            </div>
          </Card.Footer>
        )}
      </Card>
    </Container>
  );
};

export default Cart;
