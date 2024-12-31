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
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around py-16 lg:py-20">
          <img
            src={profile}
            alt="profile"
            className={`max-w-[500px] w-full rounded-full p-2 lg:order-last border-2 ${
              theme === "light" ? "border-redIcon" : "border-cianIcon"
            }`}
          />
          <div className="my-5 flex flex-col">
            <div className="flex flex-col">
              <p className="text-5xl lg:text-6xl text-center font-playFair font-semibold">
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
            <p className="max-w-[450px] my-5 text-gray-500 text-center">
              Especializado en crear aplicaciones web eficientes y escalables,
              combinando habilidades en frontend y backend.
            </p>
            <a
              href="https://drive.google.com/file/d/1Cf_bEv0G0G_PBC6UCCD-SSzjbA47HqAB/view?usp=sharing"
              target="_blank"
              className="flex justify-center"
            >
              <div className="max-w-[150px] w-full py-2 text-white text-center rounded-xl bg-gradient-to-r from-redIcon to-cianIcon hover:brightness-110">
                Descargar CV
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
