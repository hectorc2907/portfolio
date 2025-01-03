import { Outlet } from "react-router-dom";
import HeaderNotFound from "../components/common/HeaderNotFound/HeaderNotFound";
import Footer from "../components/common/Footer/Footer";

const NotFoundLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNotFound />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundLayout;
