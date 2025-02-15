import { useContext, useState } from "react";
import FormPay from "./FormPay";
import { regionsAndCommunes } from "../../../apis/RegionsAndCommunes";
import { CartContext } from "../../../context/CartContext";
import { countries } from "../../../apis/Countries";

const FormPayLogic = () => {
  const { cart, getTotalItems, getTotalPrice } = useContext(CartContext);
  let totalProd = getTotalItems();
  let total = getTotalPrice();
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    phone: "",
    region: "",
    comuna: "",
    address: "",
    apartment: "",
    deliveryDate: "",
    deliveryType: "delivery",
    paymentMethod: "",
  });
  const [companyPhone, setCompanyPhone] = useState("+56950834824");
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCommunes, setSelectedCommunes] = useState("");
  const [communes, setCommunes] = useState([]);
  const [deliReti, setDeliReti] = useState({ retiro: "Gratis" }); // Inicia con retiro seleccionado

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (e) => {
    const selectedCode = e.target.value;
    const country = countries.find((c) => c.code === selectedCode);
    setSelectedCountry(country);
    handleChange(e);
  };

  const handleRegionChange = (e) => {
    e.preventDefault()
    const regionName = e.target.value;
    setSelectedRegion(regionName);

    const region = regionsAndCommunes.find(
      (r) => r.NombreRegion === regionName
    );

    setCommunes(region ? region.comunas : []);
    // setSelectedCommunes(""); // Resetear la comuna seleccionada al cambiar la región
    handleChange(e);
  };

  const handleDelivery = (e) => {
    const { value } = e.target;
    setDeliReti(value === "3.990" ? { delivery: value } : { retiro: value });
  };

  // Función para generar el mensaje y redirigir a WhatsApp
  const handleWhatsAppOrder = (e) => {
    e.preventDefault();
    let message = "¡Hola! Tengo una dulce tentación de:\n";
    cart.forEach((item) => {
      message += `🛒 ${item.cantidad}x ${item.nombre} -  $${Number(
        item.precio
      ).toFixed(3)}\n`;
    });

    message += "\n📌 *Datos del comprador:*\n";
    message += `👤 Nombre: ${formData.name}\n`;
    message += `📞 Teléfono: ${formData.code + " " + formData.phone}\n`;
    message += `🌍 Región: ${formData.region}\n`;
    message += `🏘️ Comuna: ${formData.comuna}\n`;
    message += `📍 Dirección: ${formData.address}\n`;
    message += `🏢 Departamento: ${formData.apartment}\n`;
    message += `📅 Fecha de entrega: ${formData.deliveryDate}\n`;
    message += `🚚 Envío: ${formData.deliveryType}\n`;
    message += `💳 Método de pago: ${formData.paymentMethod}\n`;
    message += `💵 Costo de envío: $${deliReti.delivery}\n`;
    message += `💰 Total:  $${(
      total + (Number(deliReti.delivery) || 0)
    ).toFixed(3)}\n`;

    // Codificar el mensaje para la URL
    const encodedMessage = encodeURIComponent(message);

    // Construimos el enlace
    const whatsappURL = `https://wa.me/${companyPhone}?text=${encodedMessage}`;

    // Redirigir a WhatsApp
    window.open(whatsappURL, "_blank");
  };

  let data = {
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
  };
  return (
    <>
      <FormPay data={data} />
    </>
  );
};

export default FormPayLogic;
