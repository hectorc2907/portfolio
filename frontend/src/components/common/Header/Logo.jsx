import logoLight from "../../../assets/icons/logoLight.png";
import logoLongLight from "../../../assets/icons/logoLongLight.png";

const Logo = () => {
  return (
    <a href="/">
      <img src={logoLight} alt="logoLight" className="lg:hidden w-[50px]" />
      <img
        src={logoLongLight}
        alt="logoLight"
        className="hidden lg:flex w-[252px]"
      />
    </a>
  );
};

export default Logo;
