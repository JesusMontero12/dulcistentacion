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
  const { isOpen, setIsOpen, dataFavorite, dataCart } = data;
  return (
    <nav className="navbar navbar-expand-md navbar-light  shadow-sm">
      <div className="container">
        <a className="navbar-brand " href="/">
          <BsCake className="info-icon m-0 p-0" />
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
                  {dataCart > 0 && (
                    <span className="badgePosition">{dataCart}</span>
                  )}
                  <BsCart3 className="me-1" size={22} />
                </Badge>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/favorites">
                <Badge className="badge-navBar">
                  {dataFavorite > 0 && (
                    <span className="badgePosition">{dataFavorite}</span>
                  )}
                  <BsHeart className="me-1" size={22} />
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
