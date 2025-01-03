import { useTheme } from "../../../contexts/ThemeContext";
import { AnimatePresence, motion } from "motion/react";
import logoLongLight from "../../../assets/icons/logoLongLight.png";
import logoLongDark from "../../../assets/icons/logoLongDark.png";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`flex justify-center ${
        theme === "light" ? "" : "bg-slate-950"
      } transition-colors duration-200`}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className={`pt-[1px] mx-5 ${
            theme === "light" ? "bg-gray-950" : "bg-cianIcon"
          }`}
        />
        <AnimatePresence mode="wait">
          <a href="/" key={theme} className="m-5 flex justify-center">
            {theme === "light" ? (
              <motion.div
                key="logoLongLight"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={logoLongLight}
                  alt="logoLongLight"
                  className="w-[252px] min-h-[51.94px]"
                />
              </motion.div>
            ) : (
              <motion.div
                key="logoLongDark"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={logoLongDark}
                  alt="logoLongDark"
                  className="w-[252px] min-h-[51.94px]"
                />
              </motion.div>
            )}
          </a>
        </AnimatePresence>
        <div className="mb-5">
          <motion.p
            key="logoLongLight"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className={`text-center ${theme === "light" ? "" : "text-gray-50"}`}
          >
            H.A.C Software | &copy; Todos los derechos reservados
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
