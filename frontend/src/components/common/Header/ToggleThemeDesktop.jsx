import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../../contexts/ThemeContext";

const ToggleThemeDesktop = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => toggleTheme()}
        className="font-semibold border-slate-50 border-b-2 hover:border-redIcon"
      >
        Modo {theme === "light" ? "Oscuro" : "Claro"}
      </button>
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </div>
  );
};

export default ToggleThemeDesktop;
