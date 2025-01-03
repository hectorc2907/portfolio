import { motion } from "motion/react";
import { useTheme } from "../../../contexts/ThemeContext";
import IconsUtils from "../../../utils/IconsUtils";

const SocialNetwork = () => {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <p className="text-2xl lg:text-3xl text-center lg:text-start font-playFair font-semibold italic">
        <span
          className={`${
            theme === "light" ? "text-redIcon" : "text-cianIcon"
          } transition-colors duration-200`}
        >
          R
        </span>
        edes{" "}
        <span
          className={`${
            theme === "light" ? "text-redIcon" : "text-cianIcon"
          } transition-colors duration-200`}
        >
          S
        </span>
        ociales
      </p>
      <div className="w-full my-5">
        <div className="flex flex-col items-center gap-5">
          <a
            href="https://wa.me/5493812033116"
            target="_blank"
            className="max-w-[300px] w-full py-2 flex justify-center items-center gap-5 text-2xl bg-[#50CC5E] rounded-2xl hover:brightness-[1.15]"
          >
            <IconsUtils tech="whatsapp" />
            <p>Whatsapp</p>
          </a>
          <a
            href="https://www.facebook.com/hectoralberto.clessi/"
            target="_blank"
            className="max-w-[300px] w-full py-2 flex justify-center items-center gap-5 text-2xl bg-[#1CA4F9] rounded-2xl hover:brightness-[1.15]"
          >
            <IconsUtils tech="facebook" />
            <p>Facebook</p>
          </a>
          <a
            href="https://www.instagram.com/hectorc2907/"
            target="_blank"
            className="max-w-[300px] w-full py-2 flex justify-center items-center gap-5 text-2xl bg-[#C73C69] rounded-2xl hover:brightness-[1.15]"
          >
            <IconsUtils tech="instagram" />
            <p>Instagram</p>
          </a>
          <a
            href="https://www.linkedin.com/in/hector-clessi/"
            target="_blank"
            className="max-w-[300px] w-full py-2 flex justify-center items-center gap-5 text-2xl bg-[#126BC4] rounded-2xl hover:brightness-[1.15]"
          >
            <IconsUtils tech="linkedin" />
            <p>LinkedIn</p>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default SocialNetwork;
