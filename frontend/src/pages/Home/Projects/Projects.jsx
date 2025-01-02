import { useTheme } from "../../../contexts/ThemeContext";
import IconsUtils from "../../../utils/IconsUtils";

const Projects = () => {
  const { theme } = useTheme();
  return (
    <section
      id="projects"
      className={`flex justify-center ${
        theme === "light" ? "bg-gray-50" : "bg-gray-950 text-gray-50"
      } transition-colors duration-200`}
    >
      <div className="container p-2">
        <div className="py-16 lg:py-20">
          <p className="lg:ms-20 text-3xl lg:text-4xl text-center lg:text-start font-playFair font-semibold italic">
            <span
              className={`${
                theme === "light" ? "text-redIcon" : "text-cianIcon"
              } transition-colors duration-200`}
            >
              P
            </span>
            royectos
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="flex flex-col items-center">
              <div className="flex flex-col max-w-[250px] rounded-xl shadow-md">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/009/273/280/small/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg"
                  alt="imagen web"
                  className="rounded-t-xl"
                />
                <p className="mt-5 text-center text-2xl font-playFair font-semibold">
                  Titulo
                </p>
                <p className="mt-2 px-3 text-center text-gray-500">
                  Portafolio moderno y responsivo con React, Tailwind CSS y
                  animaciones con Motion, destacando proyectos y habilidades.
                </p>
                <div className="mt-5 flex justify-evenly text-3xl">
                  <IconsUtils tech="react.js" />
                  <IconsUtils tech="tailwindcss" />
                </div>
                <div className="mt-2 flex justify-between">
                  <a
                    href="#"
                    target="_blank"
                    className="w-full flex justify-center items-center gap-2 py-2 text-center border-t-[1px] border-r-[1px] rounded-bl-lg"
                  >
                    GitHub <IconsUtils tech="github" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="w-full flex justify-center items-center gap-2 py-2 text-center border-t-[1px] rounded-br-lg"
                  >
                    Preview <IconsUtils tech="web" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
