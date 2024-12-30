import { navLinks } from "../../../config/navLinks";

// eslint-disable-next-line react/prop-types
const DesktopNav = ({ scrollToSection }) => {
  return (
    <div className="hidden lg:flex gap-5">
      {navLinks.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          onClick={(e) => scrollToSection(e, `#${link.id}`)}
        >
          <div className="w-full text-center font-semibold border-white border-b-2 hover:border-red-500">
            {link.label}
          </div>
        </a>
      ))}
    </div>
  );
};

export default DesktopNav;
