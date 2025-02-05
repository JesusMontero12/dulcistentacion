import { BsCake } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="py-4 pink-bg">
        <div className="container text-center">
          {/* <Cake className="footer-icon" /> */}
          <BsCake className="info-icon" />
          <p className="text-secondary mb-0">
            © 2025 Dulcis'Tentación. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
