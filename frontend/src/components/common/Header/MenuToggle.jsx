import { AnimatePresence, motion } from "motion/react";
import { IoClose, IoMenu } from "react-icons/io5";
import { useTheme } from "../../../contexts/ThemeContext";

// eslint-disable-next-line react/prop-types
const MenuToggle = ({ menuOpen, toggleMenu }) => {
  const { theme } = useTheme();
  return (
    <AnimatePresence mode="wait">
      <div
        key={theme}
        className={`flex lg:hidden text-[50px] ${
          theme === "light" ? "" : "text-gray-50"
        } cursor-pointer transition-colors duration-200`}
      >
        {menuOpen ? (
          <motion.div
            key="CloseToggle"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <IoClose onClick={() => toggleMenu(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="MenuToggle"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <IoMenu onClick={() => toggleMenu(true)} />
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default MenuToggle;
