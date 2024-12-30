import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../../contexts/ThemeContext";

const ToggleThemeDesktop = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
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
    </div>
  );
};

export default ToggleThemeDesktop;
