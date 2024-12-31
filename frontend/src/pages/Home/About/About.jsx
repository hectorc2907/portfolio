import { useTheme } from "../../../contexts/ThemeContext";
import { services } from "../../../config/serviceConfig";
import IconsUtils from "../../../utils/IconsUtils";

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
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col justify-between mx-3 p-5 ${
                  theme === "light" ? "bg-gray-50" : "bg-gray-950"
                } rounded-2xl transition-colors duration-200`}
              >
                <div>
                  <p className="text-center text-xl font-playFair">
                    {service.title}
                  </p>
                  <p className="mt-5 mb-8 text-center text-gray-500">
                    {service.description}
                  </p>
                </div>
                <div className="flex justify-evenly text-4xl">
                  {service.icons.map((icon, index) => (
                    <IconsUtils key={index} tech={icon} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
