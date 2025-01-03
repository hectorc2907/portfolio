import { motion } from "motion/react";
import { useTheme } from "../../../contexts/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const DesktopNavNotFound = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="hidden lg:flex gap-5">
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 + 0.2 }}
        href="/"
      >
        <div
          className={`font-semibold border-b-2 ${
            theme === "light"
              ? "border-gray-50 hover:border-redIcon"
              : "text-gray-50 border-gray-950 hover:border-cianIcon"
          } transition-colors duration-200`}
        >
          Home
        </div>
      </motion.a>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className={`flex items-center gap-2 ${
          theme === "light" ? "" : "text-gray-50"
        } transition-colors duration-200`}
      >
        <button
          onClick={() => toggleTheme()}
          className={`font-semibold border-b-2 ${
            theme === "light"
              ? "border-gray-50 hover:border-redIcon"
              : "border-gray-950 hover:border-cianIcon"
          }`}
        >
          Modo {theme === "light" ? "Oscuro" : "Claro"}
        </button>
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </motion.div>
    </div>
  );
};

export default DesktopNavNotFound;
