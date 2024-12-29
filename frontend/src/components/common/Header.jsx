import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import logoLight from "../../assets/icons/logoLight.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    console.log(menuOpen)
  };
  return (
    <div className="flex justify-center">
      <div className="container bg-red-200">
        <div className="p-2 flex justify-between items-center">
          <a href="/">
            <img src={logoLight} alt="logoLight" className="w-[50px]" />
          </a>
          <div className="text-[50px]">
            {menuOpen ? (
              <IoClose onClick={() => toggleMenu()} />
            ) : (
              <IoMenu onClick={() => toggleMenu()} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
