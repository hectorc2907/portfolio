import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../../contexts/ThemeContext";

const ToggleThemeMobile = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={() => toggleTheme()}
      className="w-full py-3 flex justify-center items-center gap-2 text-center text-2xl font-semibold italic hover:bg-slate-200 active:bg-slate-200"
    >
      <span>Modo {theme === "light" ? "Oscuro" : "Claro"}</span>
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ToggleThemeMobile;
