import { BsCake } from "react-icons/bs";
import "./NavBar.css";

const NavBar = ({ data }) => {
  const { isOpen, setIsOpen } = data;
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white  shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <BsCake className="info-icon" />
          <span>Dulcis'Tentación</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#menu">
                Menú
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Carrito
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
