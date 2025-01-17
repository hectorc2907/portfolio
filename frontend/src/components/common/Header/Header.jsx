import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import Logo from "./Logo";
import MenuToggle from "./MenuToggle";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useTheme } from "../../../contexts/ThemeContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { theme } = useTheme();

  const toggleMenu = (value) => {
    setMenuOpen(value);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    const headerHight = 67.92;
    const sectionPosition = section.offsetTop - headerHight;

    window.scrollTo({ top: sectionPosition, behavior: "smooth" });

    toggleMenu(false);
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
            <DesktopNav scrollToSection={scrollToSection} />
          </div>
        </div>
      </div>
      <MobileNav menuOpen={menuOpen} scrollToSection={scrollToSection} />
    </>
  );
};

export default Header;
