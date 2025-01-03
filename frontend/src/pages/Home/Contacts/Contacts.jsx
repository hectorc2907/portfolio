import { useTheme } from "../../../contexts/ThemeContext";
import IconsUtils from "../../../utils/IconsUtils";

const Contacts = () => {
  const { theme } = useTheme();

  const handleCopy = (email) => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Correo copiado al portapapeles!");
      })
      .catch((error) => {
        console.error("Error al copiar el correo:", error);
      });
  };

  return (
    <section
      id="contacts"
      className={`flex justify-center ${
        theme === "light" ? "bg-gray-50" : "bg-gray-950 text-gray-50"
      } transition-colors duration-200`}
    >
      <div className="container p-2">
        <div className="py-16 lg:py-20">
          <p className="mb-5 lg:ms-20 text-3xl lg:text-4xl text-center lg:text-start font-playFair font-semibold italic">
            <span
              className={`${
                theme === "light" ? "text-redIcon" : "text-cianIcon"
              } transition-colors duration-200`}
            >
              C
            </span>
            ontactos
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col items-center">
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
            </div>
            <div className="flex flex-col items-center">
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
              <div className="w-full my-5">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
