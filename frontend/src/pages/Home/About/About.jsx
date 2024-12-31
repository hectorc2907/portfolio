import { useTheme } from "../../../contexts/ThemeContext";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

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
            <div
              className={`flex flex-col justify-between mx-3 p-5 ${
                theme === "light" ? "bg-gray-50" : "bg-gray-950"
              } rounded-2xl transition-colors duration-200`}
            >
              <div>
                <p className="text-center text-xl font-playFair">Front-End</p>
                <p className="mt-5 mb-8 text-center text-gray-500">
                  Construyendo interfaces modernas con React, diseñadas con
                  Bootstrap y Tailwind CSS para experiencias web dinámicas,
                  responsivas y atractivas.
                </p>
              </div>
              <div className="flex justify-evenly text-4xl">
                <FaReact color="#1BA1CC" />
                <BsFillBootstrapFill color="#694796" />
                <RiTailwindCssFill color="#3EBFF8" />
              </div>
            </div>
            <div
              className={`flex flex-col justify-between mx-3 p-5 ${
                theme === "light" ? "bg-gray-50" : "bg-gray-950"
              } rounded-2xl transition-colors duration-200`}
            >
              <div>
                <p className="text-center text-xl font-playFair">Back-End</p>
                <p className="mt-5 mb-8 text-center text-gray-500">
                  Creando servidores robustos con Node.js y Express, diseñados
                  para manejar eficientemente datos y brindar APIs rápidas y
                  seguras.
                </p>
              </div>
              <div className="flex justify-evenly text-4xl">
                <FaNodeJs color="#8EC608" />
                <SiExpress color={theme === "light" ? "#000000" : "#FFFFFF"} />
              </div>
            </div>
            <div
              className={`flex flex-col justify-between mx-3 p-5 ${
                theme === "light" ? "bg-gray-50" : "bg-gray-950"
              } rounded-2xl transition-colors duration-200`}
            >
              <div>
                <p className="text-center text-xl font-playFair">
                  Base de Datos
                </p>
                <p className="mt-5 mb-8 text-center text-gray-500">
                  Gestionando bases de datos NoSQL con MongoDB, asegurando el
                  almacenamiento y consulta de datos de manera eficiente y
                  escalable.
                </p>
              </div>
              <div className="flex justify-evenly text-4xl">
                <SiMongodb color="#17AD55" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
