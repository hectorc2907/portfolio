import { motion } from "motion/react";
import { useTheme } from "../../../contexts/ThemeContext";
import DownloadButton from "./DownloadButton";

const ProfileText = () => {
    const {theme} = useTheme()
    return (
    <div className="my-5 flex flex-col">
      <div className="flex flex-col">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-6xl text-center font-playFair font-semibold"
        >
          Hector Clessi
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          className={`text-xl lg:text-2xl text-center ${
            theme === "light" ? "text-redIcon" : "text-cianIcon"
          } italic`}
        >
          Desarrollador Full-Stack
        </motion.p>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-[450px] my-5 text-gray-500 text-center"
      >
        Especializado en crear aplicaciones web eficientes y escalables,
        combinando habilidades en frontend y backend.
      </motion.p>
      <DownloadButton />
    </div>
  );
};

export default ProfileText;
