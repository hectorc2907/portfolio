import { projects } from "../../../config/projectConfig";
import { useTheme } from "../../../contexts/ThemeContext";
import { motion } from "motion/react";
import IconsUtils from "../../../utils/IconsUtils";

const ProjectsCards = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col items-center">
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + 0.15 * index }}
            viewport={{ once: true }}
            className={`max-w-[350px] flex flex-col rounded-xl shadow-md ${
              theme === "light" ? "" : "shadow-cianIcon"
            }`}
          >
            <img
              src={project.img}
              alt={project.title}
              className="max-w-[350px] max-h-[175px] rounded-t-xl"
            />
            <p className="mt-5 text-center text-2xl font-playFair font-semibold">
              {project.title}
            </p>
            <p className="mt-2 px-3 text-center text-gray-500">
              {project.description}
            </p>
            <div className="mt-5 flex justify-evenly text-3xl">
              {project.technologies.map((tech, index) => (
                <IconsUtils key={index} tech={tech} />
              ))}
            </div>
            <div className="mt-2 flex justify-between">
              <a
                href={project.repository}
                target="_blank"
                className={`w-full flex justify-center items-center gap-2 py-2 text-center border-t-[1px] border-r-[1px] ${
                  theme === "light"
                    ? "hover:bg-gray-150"
                    : "hover:bg-gray-800 border-cianIcon"
                } rounded-bl-lg `}
              >
                GitHub <IconsUtils tech="github" />
              </a>
              <a
                href={project.preview}
                target="_blank"
                className={`w-full flex justify-center items-center gap-2 py-2 text-center border-t-[1px] ${
                  theme === "light"
                    ? "hover:bg-gray-150"
                    : "hover:bg-gray-800 border-cianIcon"
                } rounded-br-lg `}
              >
                Preview <IconsUtils tech="web" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCards;
