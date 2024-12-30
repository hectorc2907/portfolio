import { IoClose, IoMenu } from "react-icons/io5";
import { useTheme } from "../../../contexts/ThemeContext";

// eslint-disable-next-line react/prop-types
const MenuToggle = ({ menuOpen, toggleMenu }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`flex lg:hidden text-[50px] ${
        theme === "light" ? "" : "text-gray-50"
      } cursor-pointer transition-colors duration-200`}
    >
      {menuOpen ? (
        <IoClose onClick={() => toggleMenu(false)} />
      ) : (
        <IoMenu onClick={() => toggleMenu(true)} />
      )}
    </div>
  );
};

export default MenuToggle;
