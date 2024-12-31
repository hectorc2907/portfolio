import { useTheme } from "../../../contexts/ThemeContext";
import ProfileImage from "./ProfileImage";
import ProfileText from "./ProfileText";

const Presentation = () => {
  const { theme } = useTheme();
  return (
    <section
      id="home"
      className={`flex justify-center ${
        theme === "light" ? "bg-gray-50" : "bg-gray-950 text-gray-50"
      } transition-colors duration-200`}
    >
      <div className="container p-2">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around py-16 lg:py-20 xl:py-32">
          <ProfileImage />
          <ProfileText />
        </div>
      </div>
    </section>
  );
};

export default Presentation;
