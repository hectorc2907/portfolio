// eslint-disable-next-line react/prop-types
const DesktopNav = ({ scrollToSection }) => {
  return (
    <div className="hidden lg:flex gap-5">
      <a href="#home" onClick={(e) => scrollToSection(e, "#home")}>
        <div className="w-full text-center font-semibold border-white border-b-2 hover:border-red-500">
          Home
        </div>
      </a>
      <a href="#aboutMe" onClick={(e) => scrollToSection(e, "#aboutMe")}>
        <div className="w-full text-center font-semibold border-white border-b-2 hover:border-red-500">
          Sobre Mí
        </div>
      </a>
      <a href="#project" onClick={(e) => scrollToSection(e, "#project")}>
        <div className="w-full text-center font-semibold border-white border-b-2 hover:border-red-500">
          Proyectos
        </div>
      </a>
      <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
        <div className="w-full text-center font-semibold border-white border-b-2 hover:border-red-500">
          Contactos
        </div>
      </a>
    </div>
  );
};

export default DesktopNav;
