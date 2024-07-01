import React from "react";
import styles from "../styles/pages/AppLayout.module.scss";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import User from "../components/User";

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
};

export default AppLayout;
