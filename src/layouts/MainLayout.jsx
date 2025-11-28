import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ theme, setTheme }) => {
  return (
    <div className="dark:bg-black">
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Outlet />
      </main>
      <Footer theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default MainLayout;
