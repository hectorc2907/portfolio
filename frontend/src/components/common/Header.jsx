import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import logoLight from "../../assets/icons/logoLight.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
      {menuOpen && (
        <div
          className="fixed z-10 inset-0 backdrop-blur-sm bg-black/30"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <div className="sticky z-30 top-0 flex justify-center">
        <div className="container relative bg-slate-50">
          <div className="p-2 flex justify-between items-center">
            <a href="/">
              <img src={logoLight} alt="logoLight" className="w-[50px]" />
            </a>
            <div className="text-[50px] cursor-pointer">
              {menuOpen ? (
                <IoClose onClick={() => toggleMenu(false)} />
              ) : (
                <IoMenu onClick={() => toggleMenu(true)} />
              )}
            </div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed top-0 right-0 max-w-[425px] w-full h-screen pt-[67.92px] z-20 bg-slate-50">
          <a href="#home" onClick={(e) => scrollToSection(e, "#home")}>
            <div className="w-full py-3 text-center text-2xl font-semibold italic hover:bg-slate-200 active:bg-slate-200">
              Home
            </div>
          </a>
          <a href="#aboutMe" onClick={(e) => scrollToSection(e, "#aboutMe")}>
            <div className="w-full py-3 text-center text-2xl font-semibold italic hover:bg-slate-200 active:bg-slate-200">
              Sobre Mí
            </div>
          </a>
          <a href="#project" onClick={(e) => scrollToSection(e, "#project")}>
            <div className="w-full py-3 text-center text-2xl font-semibold italic hover:bg-slate-200 active:bg-slate-200">
              Proyectos
            </div>
          </a>
          <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
            <div className="w-full py-3 text-center text-2xl font-semibold italic hover:bg-slate-200 active:bg-slate-200">
              Contactos
            </div>
          </a>
        </div>
      )}
    </>
  );
};

export default Header;
