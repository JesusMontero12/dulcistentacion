import { useState } from "react";
import NavBar from "./NavBar.jsx";

const NavBarLogic = () => {
  const [isOpen, setIsOpen] = useState(false);

  let data = { isOpen, setIsOpen };
  return <NavBar data={data} />;
};

export default NavBarLogic;
