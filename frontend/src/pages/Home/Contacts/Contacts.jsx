import { motion } from "motion/react";
import { useTheme } from "../../../contexts/ThemeContext";
import EmailNetwork from "./EmailNetwork";
import SocialNetwork from "./SocialNetwork";

const Contacts = () => {
  const { theme } = useTheme();

  return (
    <section
      id="contacts"
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
            className="mb-5 lg:ms-20 text-3xl lg:text-4xl text-center lg:text-start font-playFair font-semibold italic"
          >
            <span
              className={`${
                theme === "light" ? "text-redIcon" : "text-cianIcon"
              } transition-colors duration-200`}
            >
              C
            </span>
            ontactos
          </motion.p>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <SocialNetwork />
            <EmailNetwork />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className={`text-center ${theme === "light" ? "" : "text-gray-50"}`}
          >
            (click en el boton para copiar el email)
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
