import { motion } from "motion/react";
import { useTheme } from "../../../contexts/ThemeContext";
import profile from "../../../assets/img/profile.jpg";

const ProfileImage = () => {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="max-w-[500px] md:min-w-[500px] min-h-[392px] md:min-h-[500px] lg:order-last"
    >
      <img
        src={profile}
        alt="profile"
        loading="eager"
        className={`w-full rounded-full p-2 border-2 ${
          theme === "light" ? "border-redIcon" : "border-cianIcon"
        }`}
      />
    </motion.div>
  );
};

export default ProfileImage;
