import { ToastContainer } from "react-toastify";
import { useTheme } from "./contexts/ThemeContext";
import { HelmetProvider } from "react-helmet-async";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const { theme } = useTheme();
  return (
    <>
      <HelmetProvider>
        <ToastContainer
          position="bottom-right"
          autoClose={1500}
          theme={theme === "light" ? "light" : "dark"}
        />
        <AppRoutes />
      </HelmetProvider>
    </>
  );
}

export default App;
