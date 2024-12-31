/* eslint-disable react/prop-types */
import { useTheme } from "../contexts/ThemeContext";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const IconsUtils = ({ tech }) => {
  const { theme } = useTheme();

  switch (tech.toLowerCase()) {
    case "html":
      return <FaHtml5 color="#F16A30" />;
    case "css":
      return <FaCss3Alt color="#2D53E5" />;
    case "javascript":
      return <IoLogoJavascript color="#F7E025" />;
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
    case "react native":
      return <FaReact color="#1BA1CC" />;
    case "mongodb":
      return <SiMongodb color="#17AD55" />;
    default:
      return <span>Ícono no disponible</span>;
  }
};

export default IconsUtils;
