import "./Cart.css";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { BsCake, BsCart3, BsTrash3 } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = ({ data }) => {
  const { cartItems, updateQuantity, total } = data;
  return (
    <Container className="py-5">
      <Card className="border-0 shadow-sm">
        <Card.Header className="bg-white border-0 py-4">
          <h3 className="mb-0 d-flex align-items-center">
            <BsCart3 className="me-2" size={24} />
            Mi Carrito
            <Badge bg="primary" className="ms-2 rounded-pill">
              {cartItems.length}
            </Badge>
          </h3>
        </Card.Header>
        <Card.Body className="px-4">
          {cartItems.map((item) => (
            <Row key={item.id} className="mb-4 align-items-center">
              <Col xs={3} md={2}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid rounded"
                  style={{ objectFit: "cover", height: "80px", width: "80px" }}
                />
              </Col>
              <Col xs={9} md={4}>
                <h5 className="mb-1">{item.name}</h5>
                <p className="text-muted mb-0">${item.price.toFixed(2)}</p>
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
                  <span className="mx-3 fw-bold">{item.quantity}</span>
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
                    onClick={() => updateQuantity(item.id, -item.quantity)}
                  >
                    <BsTrash3 size={18} />
                  </Button>
                </div>
              </Col>
              <Col xs={12} md={2} className="text-end mt-3 mt-md-0">
                <h5 className="mb-0">
                  ${(item.price * item.quantity).toFixed(2)}
                </h5>
              </Col>
            </Row>
          ))}

          {cartItems.length === 0 && (
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

        {cartItems.length > 0 && (
          <Card.Footer className="bg-white border-0 py-4">
            <Row className="align-items-center">
              <Col>
                <h4 className="mb-0">Total</h4>
              </Col>
              <Col className="text-end">
                <h4 className="mb-0">${total.toFixed(2)}</h4>
              </Col>
            </Row>
            <div className="d-grid gap-2 mt-4">
              <Button variant="primary" size="lg">
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
