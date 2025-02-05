import { Outlet } from "react-router-dom";
import NavBarLogic from "./navBar/NavBarLogic.jsx";
import FooterLogic from "./footer/FooterLogic.jsx";

const Layouts = () => {
  return (
    <>
      <NavBarLogic />
      <Outlet />
      <FooterLogic />
    </>
  );
};

export default Layouts;
