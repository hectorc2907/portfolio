// eslint-disable-next-line react/prop-types
const MobileNav = ({ menuOpen, scrollToSection }) => {
  return (
    <>
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

export default MobileNav;
