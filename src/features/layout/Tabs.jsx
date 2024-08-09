import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const tabs = ["cities", "countries"];

const Tabs = () => {
  const { pathname } = useLocation();
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const active = tabs.find((tab) => pathname.includes(tab)) || "";
    setActiveTab(active);
  }, [pathname]);

  const tabBaseStyles =
    "block font-bold text-sm py-1.5 px-8 rounded-md text-capitalize";
  const tabActiveStyles = "bg-zinc-200 text-zinc-700 shadow-lg";

  return (
    <nav className="mt-6 mb-3">
      <ul className="flex bg-zinc-600 text-zinc-400 rounded-lg p-1 w-fit capitalize">
        {tabs.map((tab) => (
          <li key={tab}>
            <NavLink
              to={tab}
              className={`${tabBaseStyles} ${
                activeTab === tab ? tabActiveStyles : ""
              }`}
            >
              {tab}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
