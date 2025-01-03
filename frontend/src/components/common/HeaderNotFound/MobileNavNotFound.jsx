import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "../../../contexts/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const MobileNavNotFound = ({ menuOpen }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <AnimatePresence mode="wait">
      {menuOpen && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 right-0 max-w-full md:max-w-[425px] lg:hidden w-full h-screen pt-[67.92px] z-20 ${
            theme === "light" ? "bg-gray-50" : "bg-gray-950"
          } transition-colors duration-200`}
        >
          <a href="/">
            <div
              className={`w-full py-3 text-center text-2xl font-semibold italic ${
                theme === "light"
                  ? "hover:bg-slate-200 active:bg-slate-200"
                  : "text-gray-50 hover:bg-gray-800 active:bg-gray-800"
              } transition-colors duration-200`}
            >
              Home
            </div>
          </a>
          <button
            onClick={() => toggleTheme()}
            className={`w-full py-3 flex justify-center items-center gap-2 text-center text-2xl font-semibold italic ${
              theme === "light"
                ? "hover:bg-slate-200 active:bg-slate-200"
                : "text-gray-50 hover:bg-slate-800 active:bg-gray-800"
            } transition-colors duration-200`}
          >
            <span>Modo {theme === "light" ? "Oscuro" : "Claro"}</span>
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavNotFound;
