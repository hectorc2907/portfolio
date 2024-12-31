import { useTheme } from "../../../contexts/ThemeContext";

const About = () => {
  const { theme } = useTheme();
  return (
    <section
      id="about"
      className={`flex justify-center ${
        theme === "light" ? "bg-gray-150" : "bg-gray-850 text-gray-50"
      } transition-colors duration-200`}
    >
      aboutMe
    </section>
  );
};

export default About;
