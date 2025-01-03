import { Outlet } from "react-router-dom";
import HeaderNotFound from "../components/common/HeaderNotFound/HeaderNotFound";
import Footer from "../components/common/Footer/Footer";
import { useTheme } from "../contexts/ThemeContext";

const NotFoundLayout = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNotFound />
      <main
        className={`flex-1 flex justify-center items-center ${
          theme === "light" ? "" : "bg-gray-950 text-gray-50"
        }`}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundLayout;
