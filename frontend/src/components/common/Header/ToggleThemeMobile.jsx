import { FaMoon } from "react-icons/fa";

const ToggleThemeMobile = () => {
  return (
    <button className="w-full py-3 flex justify-center items-center gap-2 text-center text-2xl font-semibold italic hover:bg-slate-200 active:bg-slate-200">
      <span>Modo Oscuro</span>
      <FaMoon />
    </button>
  );
};

export default ToggleThemeMobile;
