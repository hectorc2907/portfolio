import { motion } from "motion/react";
import { services } from "../../../config/serviceConfig";
import { useTheme } from "../../../contexts/ThemeContext";
import IconsUtils from "../../../utils/IconsUtils";

const Services = () => {
  const { theme } = useTheme();
  return (
    <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.5, delay: 0.2 + 0.15 * index },
          }}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          viewport={{ once: true }}
          className={`flex flex-col justify-between mx-3 p-5 ${
            theme === "light"
              ? "bg-gray-50 text-gray-950"
              : "bg-gray-950 text-gray-50"
          } rounded-2xl cursor-pointer transition-colors duration-200`}
        >
          <div>
            <p className="text-center text-xl font-playFair">{service.title}</p>
            <p className="mt-5 mb-8 text-center text-gray-500">
              {service.description}
            </p>
          </div>
          <div className="flex justify-evenly text-4xl">
            {service.icons.map((icon, index) => (
              <IconsUtils key={index} tech={icon} />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Services;
