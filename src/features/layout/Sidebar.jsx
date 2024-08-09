import { Outlet } from "react-router-dom";

import Tabs from "./Tabs";
import Logo from "../../ui/Logo";
import Footer from "../../ui/Footer";

const Sidebar = ({ isOpen }) => {
  const baseStyles = "bg-zinc-700 flex-col justify-center md:justify-start";
  const mobileStyles = `
  absolute top-[3.625rem] left-0 w-full z-50
  ${isOpen ? "flex" : "hidden"}
  h-[calc(100vh-3.625rem)] px-2 py-6 sm:px-6`;
  const desktopStyles =
    "md:relative md:top-0 md:py-8 md:px-8 md:flex md:border-r-2 md:border-zinc-500 md:h-screen";

  return (
    <>
      <div className={`${baseStyles} ${mobileStyles} ${desktopStyles}`}>
        <Logo small className="hidden md:block" />
        <Tabs />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Sidebar;
