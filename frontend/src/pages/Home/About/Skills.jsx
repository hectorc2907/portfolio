import { motion } from "motion/react";
import { technologies } from "../../../config/serviceConfig";
import { useTheme } from "../../../contexts/ThemeContext";
import IconsUtils from "../../../utils/IconsUtils";

const Skills = () => {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.65 }}
      viewport={{ once: true }}
      className={`mx-3 mt-5 lg:mt-10 p-5 ${
        theme === "light"
          ? "bg-gray-50 text-gray-950"
          : "bg-gray-950 text-gray-50"
      } rounded-2xl transition-colors duration-200`}
    >
      <p className="text-center text-xl font-playFair">Habilidades</p>
      <div className="mt-7 mb-2 lg:mt-10 lg:mb-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {technologies.map((tech, index) => (
          <div key={index}>
            <div className="flex flex-col items-center text-4xl">
              <IconsUtils tech={tech} />
              <span className="text-sm lg:text-base font-semibold">{tech}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
