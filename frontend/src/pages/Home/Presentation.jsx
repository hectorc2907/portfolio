import { useTheme } from "../../contexts/ThemeContext";
import profile from "../../assets/img/profile.jpg";

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
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around py-20">
          <img
            src={profile}
            alt="profile"
            className={`max-w-[500px] w-full rounded-full p-2 lg:order-last border-2 ${
              theme === "light" ? "border-redIcon" : "border-cianIcon"
            }`}
          />
          <div className="my-10">
            <p className="text-5xl lg:text-6xl font-playFair font-semibold">
              Hector Clessi
            </p>
            <p
              className={`text-xl lg:text-2xl text-center ${
                theme === "light" ? "text-redIcon" : "text-cianIcon"
              } italic`}
            >
              Desarrollador Full-Stack
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
