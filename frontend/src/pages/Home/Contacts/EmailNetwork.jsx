import { motion } from "motion/react";
import { useTheme } from "../../../contexts/ThemeContext";
import { toast } from "react-toastify";
import IconsUtils from "../../../utils/IconsUtils";

const EmailNetwork = () => {
  const { theme } = useTheme();

  const handleCopy = (email) => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        toast.success(`Correo ${email} copiado!`);
      })
      .catch((error) => {
        console.error("Error al copiar el correo:", error);
        toast.error("Error al copiar el correo. Inténtalo nuevamente.");
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <p className="text-2xl lg:text-3xl text-center lg:text-start font-playFair font-semibold italic">
        <span
          className={`${
            theme === "light" ? "text-redIcon" : "text-cianIcon"
          } transition-colors duration-200`}
        >
          C
        </span>
        orreos{" "}
        <span
          className={`${
            theme === "light" ? "text-redIcon" : "text-cianIcon"
          } transition-colors duration-200`}
        >
          E
        </span>
        lectronicos
      </p>
      <div className="w-full my-5 text-gray-50">
        <div className="flex flex-col items-center gap-5">
          <button
            onClick={() => handleCopy("hectorc2907@gmail.com")}
            className="max-w-[300px] w-full py-2 flex justify-center items-center gap-5 text-2xl bg-[#EB493B] rounded-2xl hover:brightness-[1.15]"
          >
            <IconsUtils tech="gmail" />
            <p>Gmail</p>
          </button>
          <button
            onClick={() => handleCopy("hectorc2907@hotmail.com")}
            className="max-w-[300px] w-full py-2 flex justify-center items-center gap-5 text-2xl bg-[#0C69BA] rounded-2xl hover:brightness-[1.15]"
          >
            <IconsUtils tech="outlook" />
            <p>Hotmail</p>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default EmailNetwork;
