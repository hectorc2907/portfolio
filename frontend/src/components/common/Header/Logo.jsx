import logoLight from "../../../assets/icons/logoLight.png";
import logoDark from "../../../assets/icons/logoDark.png";
import logoLongLight from "../../../assets/icons/logoLongLight.png";
import logoLongDark from "../../../assets/icons/logoLongDark.png";
import { useTheme } from "../../../contexts/ThemeContext";
import { AnimatePresence, motion } from "motion/react";

const Logo = () => {
  const { theme } = useTheme();
  return (
    <AnimatePresence mode="wait">
      <a href="/" key={theme}>
        {theme === "light" ? (
          <motion.div
            key="logoLight"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={logoLight}
              alt="logoLight"
              className="lg:hidden w-[50px] min-h-[51.92px]"
            />
          </motion.div>
        ) : (
          <motion.div
            key="logoDark"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={logoDark}
              alt="logoDark"
              className="lg:hidden w-[50px] min-h-[51.92px]"
            />
          </motion.div>
        )}
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
              className="hidden lg:flex w-[252px] min-h-[51.94px]"
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
              className="hidden lg:flex w-[252px] min-h-[51.94px]"
            />
          </motion.div>
        )}
      </a>
    </AnimatePresence>
  );
};

export default Logo;
