/* eslint-disable react/prop-types */
import { useTheme } from "../contexts/ThemeContext";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiGmail, SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";

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
    case "github":
      return <FaGithub color={theme === "light" ? "#000000" : "#FFFFFF"} />;
    case "web":
      return <MdOutlineWeb color={theme === "light" ? "#000000" : "#FFFFFF"} />;
    case "whatsapp":
      return <FaWhatsapp />;
    case "facebook":
      return <FaFacebook />;
    case "instagram":
      return <FaInstagram />;
    case "linkedin":
      return <FaLinkedin />;
    case "gmail":
      return <SiGmail />;
    case "outlook":
      return <PiMicrosoftOutlookLogoFill />;
    default:
      return <span>Ícono no disponible</span>;
  }
};

export default IconsUtils;
