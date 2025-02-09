import {
  BsCake,
  BsCart3,
  BsFillMenuButtonWideFill,
  BsHeart,
} from "react-icons/bs";
import "./NavBar.css";
import { Badge } from "react-bootstrap";
import { HiOutlineHome } from "react-icons/hi";

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
              <a className="nav-link my-1 mx-1" href="/">
                <HiOutlineHome className="me-1" size={24} />
              </a>
            </li>
            <li className="nav-item my-1 mx-1">
              <a className="nav-link" href="/products">
                <BsFillMenuButtonWideFill className="me-1" size={22} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                <Badge className="badge-navBar">
                  <span className="badgePosition">3</span>
                  <BsCart3 className="me-2" size={22} />
                </Badge>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/favorites">
                <Badge className="badge-navBar">
                  <span className="badgePosition">3</span>
                  <BsHeart className="me-2" size={22} />
                </Badge>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
