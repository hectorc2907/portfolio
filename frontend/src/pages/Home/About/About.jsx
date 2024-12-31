import { useTheme } from "../../../contexts/ThemeContext";
import Services from "./Services";
import Skills from "./Skills";

const About = () => {
  const { theme } = useTheme();
  return (
    <section
      id="about"
      className={`flex justify-center ${
        theme === "light" ? "bg-gray-150" : "bg-gray-850 text-gray-50"
      } transition-colors duration-200`}
    >
      <div className="container p-2">
        <div className="py-16 lg:py-20">
          <p className="lg:ms-20 text-3xl lg:text-4xl text-center lg:text-start font-playFair font-semibold italic">
            Sobre{" "}
            <span
              className={`${
                theme === "light" ? "text-redIcon" : "text-cianIcon"
              } transition-colors duration-200`}
            >
              Mí
            </span>
          </p>
          <Services />
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
