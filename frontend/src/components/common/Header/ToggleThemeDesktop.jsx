import { FaMoon } from "react-icons/fa";

const ToggleThemeDesktop = () => {
  return (
    <div className="flex items-center gap-2">
      <button className="font-semibold border-white border-b-2 hover:border-red-500">
        Modo Oscuro
      </button>
      <FaMoon />
    </div>
  );
};

export default ToggleThemeDesktop;
