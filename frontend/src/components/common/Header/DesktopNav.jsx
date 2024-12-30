import { navLinks } from "../../../config/navLinks";
import ToggleThemeDesktop from "./ToggleThemeDesktop";

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
          <div className="font-semibold border-slate-50 border-b-2 hover:border-redIcon">
            {link.label}
          </div>
        </a>
      ))}
      <ToggleThemeDesktop />
    </div>
  );
};

export default DesktopNav;
