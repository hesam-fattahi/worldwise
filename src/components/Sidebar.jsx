import { Outlet } from "react-router-dom";
import styles from "../styles/components/Sidebar.module.scss";

import AppNav from "./AppNav";
import Logo from "./Logo";
import Footer from "./Footer";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Sidebar;
