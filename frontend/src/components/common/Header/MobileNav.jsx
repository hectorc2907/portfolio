import { navLinks } from "../../../config/navLinks";

// eslint-disable-next-line react/prop-types
const MobileNav = ({ menuOpen, scrollToSection }) => {
  return (
    <>
      {menuOpen && (
        <div className="fixed top-0 right-0 max-w-[425px] w-full h-screen pt-[67.92px] z-20 bg-slate-50">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, `#${link.id}`)}
            >
              <div className="w-full py-3 text-center text-2xl font-semibold italic hover:bg-slate-200 active:bg-slate-200">
                {link.label}
              </div>
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default MobileNav;
