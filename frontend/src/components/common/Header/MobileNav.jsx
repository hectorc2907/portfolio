import { AnimatePresence, motion } from "motion/react";
import { navLinks } from "../../../config/navLinks";
import { useTheme } from "../../../contexts/ThemeContext";
import ToggleThemeMobile from "./ToggleThemeMobile";

// eslint-disable-next-line react/prop-types
const MobileNav = ({ menuOpen, scrollToSection }) => {
  const { theme } = useTheme();
  return (
    <AnimatePresence mode="wait">
      {menuOpen && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 right-0 max-w-[425px] w-full h-screen pt-[67.92px] z-20 ${
            theme === "light" ? "bg-gray-50" : "bg-gray-950"
          } transition-colors duration-200`}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, `#${link.id}`)}
            >
              <div
                className={`w-full py-3 text-center text-2xl font-semibold italic ${
                  theme === "light"
                    ? "hover:bg-slate-200 active:bg-slate-200"
                    : "text-gray-50 hover:bg-gray-800 active:bg-gray-800"
                } transition-colors duration-200`}
              >
                {link.label}
              </div>
            </a>
          ))}
          <ToggleThemeMobile />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
