import logoLight from "../../../assets/icons/logoLight.png";
import logoDark from "../../../assets/icons/logoDark.png";
import logoLongLight from "../../../assets/icons/logoLongLight.png";
import logoLongDark from "../../../assets/icons/logoLongDark.png";
import { useTheme } from "../../../contexts/ThemeContext";

const Logo = () => {
  const { theme } = useTheme();
  return (
    <a href="/">
      {theme === "light" ? (
        <img src={logoLight} alt="logoLight" className="lg:hidden w-[50px]" />
      ) : (
        <img src={logoDark} alt="logoDark" className="lg:hidden w-[50px]" />
      )}
      {theme === "light" ? (
        <img
          src={logoLongLight}
          alt="logoLight"
          className="hidden lg:flex w-[252px]"
        />
      ) : (
        <img
          src={logoLongDark}
          alt="logoLongDark"
          className="hidden lg:flex w-[252px]"
        />
      )}
    </a>
  );
};

export default Logo;
