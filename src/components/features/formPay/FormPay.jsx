import "./FormPay.css";
import { BsPinMap, BsTruck } from "react-icons/bs";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  ListGroup,
  Row,
} from "react-bootstrap";

const FormPay = ({ data }) => {
  const {
    handleChange,
    formData,
    selectedCountry,
    handleCountryChange,
    handleRegionChange,
    selectedRegion,
    selectedCommunes,
    setSelectedCommunes,
    regionsAndCommunes,
    communes,
    totalProd,
    total,
    handleDelivery,
    deliReti,
    handleWhatsAppOrder,
    countries,
  } = data;
  console.log(formData);
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-light my-5">
        <Card className="shadow-lg p-4 w-100" style={{ maxWidth: "500px" }}>
          <Card.Body>
            <div className="text-center mb-4">
              <BsPinMap size={32} className="text-primary" />
              <h2 className="mt-2">Información de Envío</h2>
            </div>
            <Form onSubmit={handleWhatsAppOrder}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Número telefónico</Form.Label>
                <InputGroup>
                  <Form.Select
                    name="code"
                    value={selectedCountry.code}
                    onChange={handleCountryChange}
                    style={{ maxWidth: "120px" }}
                  >
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Control
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength="9"
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="regionSelect" className="mb-3">
                <Form.Label>Región</Form.Label>
                <Form.Select
                  name="region"
                  value={selectedRegion}
                  onChange={handleRegionChange}
                >
                  <option value="">Selecciona una región</option>
                  {regionsAndCommunes.map((region) => (
                    <option
                      key={region.NombreRegion}
                      value={region.NombreRegion}
                    >
                      {region.NombreRegion}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="comunaSelect" className="mb-3">
                <Form.Label>Comuna</Form.Label>
                <Form.Select
                  name="comuna"
                  value={selectedCommunes} // Debe ser una cadena
                  onChange={(e) => {
                    setSelectedCommunes(e.target.value); // Actualiza el estado con un solo valor
                    handleChange(e);
                  }}
                  disabled={!selectedRegion}
                >
                  <option value="">Selecciona una comuna</option>
                  {communes.map((comuna) => (
                    <option key={comuna} value={comuna}>
                      {comuna}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Número de Departamento (opcional)</Form.Label>
                <Form.Control
                  type="text"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Fecha de Entrega</Form.Label>
                <Form.Control
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="comunaSelect" className="mb-4">
                <Form.Label>Método de pago</Form.Label>
                <Form.Select name="paymentMethod" onChange={handleChange}>
                  <option value="">Selecciona un método de pago</option>
                  <option value="efectivo">Efectivo</option>
                  <option value="tarjeta">Tarjeta</option>
                  <option value="transferencia">Transferencia</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Tipo de Entrega</Form.Label>
                <Row>
                  <Col>
                    <Form.Check
                      type="radio"
                      name="deliveryType"
                      value="Gratis"
                      checked={"retiro" in deliReti} // Verifica si existe retiro en el estado
                      onChange={handleDelivery}
                      label={
                        <>
                          <HiOutlineBuildingStorefront className="me-2" />
                          Retiro
                        </>
                      }
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      type="radio"
                      name="deliveryType"
                      value="3.990"
                      checked={"delivery" in deliReti} // Verifica si existe delivery en el estado
                      onChange={handleDelivery}
                      label={
                        <>
                          <BsTruck className="me-2" /> Delivery
                        </>
                      }
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Card style={{ width: "100%" }} className="my-4">
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex justify-content-between">
                    <p className="fw-bold">Productos</p>
                    <span>{totalProd}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between">
                    <p className="fw-bold">Precio</p>
                    <span>${total.toFixed(3)}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between">
                    <p className="fw-bold">Envío</p>

                    <span>
                      {deliReti.delivery
                        ? `$ ${deliReti.delivery}`
                        : deliReti.retiro}
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between">
                    <p className="fw-bold">Total</p>
                    <span>
                      ${(total + (Number(deliReti.delivery) || 0)).toFixed(3)}
                    </span>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
              <Button
                disabled={totalProd === 0 ? true : false}
                type="submit"
                variant="primary"
                className="w-100"
              >
                Continuar con el Pedido
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default FormPay;
