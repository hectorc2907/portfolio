import { motion } from "motion/react";

const DownloadButton = () => {
  return (
    <div className="flex justify-center">
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        viewport={{ once: true }}
        href="https://drive.google.com/file/d/1bOS1nO8xOYPzdtE35ABkmrIxSumOcF2T/view?usp=sharing"
        target="_blank"
        className="max-w-[150px] w-full"
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
          className="py-2 text-white text-center rounded-xl bg-gradient-to-r from-redIcon to-cianIcon hover:brightness-[1.2]"
        >
          Descargar CV
        </motion.div>
      </motion.a>
    </div>
  );
};

export default DownloadButton;
