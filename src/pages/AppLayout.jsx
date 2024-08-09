import React, { useState } from "react";

import User from "../features/authentication/User";
import Header from "../features/layout/Header";
import Sidebar from "../features/layout/Sidebar";
import Map from "../features/layout/Map";

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="h-screen grid grid-cols-1 grid-rows-[auto_1fr] md:grid-cols-2 md:grid-rows-1 lg:grid-cols-3 overflow-hidden overscroll-y-none">
      <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <Map toggleSidebar={toggleSidebar} />
      <User />
    </div>
  );
};

export default AppLayout;
