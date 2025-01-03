import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/AppRoutes";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const { theme } = useTheme();
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        theme={theme === "light" ? "light" : "dark"}
      />
      <AppRoutes />
    </>
  );
}

export default App;
