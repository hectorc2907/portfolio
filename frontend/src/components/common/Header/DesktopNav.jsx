import { motion } from "motion/react";
import { navLinks } from "../../../config/navLinks";
import { useTheme } from "../../../contexts/ThemeContext";
import ToggleThemeDesktop from "./ToggleThemeDesktop";

// eslint-disable-next-line react/prop-types
const DesktopNav = ({ scrollToSection }) => {
  const { theme } = useTheme();
  return (
    <div className="hidden lg:flex gap-5">
      {navLinks.map((link, index) => (
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 + 0.2 * index, delay: 0.2 }}
          key={link.id}
          href={`#${link.id}`}
          onClick={(e) => scrollToSection(e, `#${link.id}`)}
        >
          <div
            className={`font-semibold border-b-2 ${
              theme === "light"
                ? "border-gray-50 hover:border-redIcon"
                : "text-gray-50 border-gray-950 hover:border-cianIcon"
            } transition-colors duration-200`}
          >
            {link.label}
          </div>
        </motion.a>
      ))}
      <ToggleThemeDesktop />
    </div>
  );
};

export default DesktopNav;
