import { useState } from "react";
import { useTheme } from "../../../contexts/ThemeContext";
import Logo from "../Header/Logo";
import MenuToggle from "../Header/MenuToggle";
import DesktopNavNotFound from "./DesktopNavNotFound";
import MobileNavNotFound from "./MobileNavNotFound";
import MenuOverlay from "../Header/MenuOverlay";

const HeaderNotFound = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { theme } = useTheme();

  const toggleMenu = (value) => {
    setMenuOpen(value);
  };
  return (
    <>
      <MenuOverlay menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div
        className={`sticky z-30 top-0 flex justify-center ${
          theme === "light" ? "bg-gray-50" : "bg-gray-950"
        } transition-colors duration-200`}
      >
        <div className="container relative">
          <div className="p-2 flex justify-between items-center">
            <Logo />
            <MenuToggle menuOpen={menuOpen} toggleMenu={toggleMenu} />
            <DesktopNavNotFound />
          </div>
        </div>
      </div>
      <MobileNavNotFound menuOpen={menuOpen} />
    </>
  );
};

export default HeaderNotFound;
