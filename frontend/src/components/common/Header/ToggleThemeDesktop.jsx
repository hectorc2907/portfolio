import { FaMoon } from "react-icons/fa";

const ToggleThemeDesktop = () => {
  return (
    <div className="flex items-center gap-2">
      <button className="font-semibold border-slate-50 border-b-2 hover:border-redIcon">
        Modo Oscuro
      </button>
      <FaMoon />
    </div>
  );
};

export default ToggleThemeDesktop;
