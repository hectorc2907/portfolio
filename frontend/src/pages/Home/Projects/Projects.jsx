import { useTheme } from "../../../contexts/ThemeContext";
import { motion } from "motion/react";
import ProjectsCards from "./ProjectsCards";

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
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:ms-20 text-3xl lg:text-4xl text-center lg:text-start font-playFair font-semibold italic"
          >
            <span
              className={`${
                theme === "light" ? "text-redIcon" : "text-cianIcon"
              } transition-colors duration-200`}
            >
              P
            </span>
            royectos
          </motion.p>
          <ProjectsCards />
        </div>
      </div>
    </section>
  );
};

export default Projects;
