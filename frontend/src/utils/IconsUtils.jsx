/* eslint-disable react/prop-types */
import { useTheme } from "../contexts/ThemeContext";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

const IconsUtils = ({ tech }) => {
  const { theme } = useTheme();

  switch (tech.toLowerCase()) {
    case "react.js":
      return <FaReact color="#1BA1CC" />;
    case "bootstrap":
      return <BsFillBootstrapFill color="#694796" />;
    case "tailwindcss":
      return <RiTailwindCssFill color="#3EBFF8" />;
    case "node.js":
      return <FaNodeJs color="#8EC608" />;
    case "express.js":
      return <SiExpress color={theme === "light" ? "#000000" : "#FFFFFF"} />;
    case "mongodb":
      return <SiMongodb color="#17AD55" />;
    default:
      return <span>Ícono no disponible</span>;
  }
};

export default IconsUtils;
