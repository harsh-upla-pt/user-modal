import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import PixelBlast from "../components/PixelBlast";
import Footer from "./components/Footer";

function Layout() {
  return (
    <div className="w-full h-full ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
