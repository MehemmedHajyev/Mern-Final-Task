import HeaderTop from "../HeaderTop/HeaderTop";
import Nav from "./Nav";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeaderTop isOpen={isOpen} toggleMenu={toggleMenu} className="transition-opacity duration-300 ease-in-out" />
      <h1 className="text-center">Header</h1>
      <Nav isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Header;
