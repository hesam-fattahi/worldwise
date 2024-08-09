import useAuth from "../hooks/useAuth";

import {
  HiBars3BottomLeft,
  HiMiniXMark,
  HiOutlineArrowRightStartOnRectangle,
} from "react-icons/hi2";

import Button from "../../ui/Button";

const Header = ({ isSidebarOpen, toggleSidebar }) => {
  const { logout } = useAuth();
  return (
    <header className="h-fit bg-zinc-700 py-2 px-4 shadow-lg border-b-2 border-zinc-500 flex items-center justify-between md:hidden">
      <img src="/icon.png" alt="Worldwise logo icon" className="max-h-8" />
      <div className="flex items-center gap-4">
        <Button
          variant="icon"
          iconText="toggle sidebar"
          className="py-1.5 px-1.5 shadow-none"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <HiMiniXMark /> : <HiBars3BottomLeft />}
        </Button>

        <Button
          variant="icon"
          iconText="toggle sidebar"
          className="py-1.5 px-1.5 shadow-none"
          onClick={logout}
        >
          <HiOutlineArrowRightStartOnRectangle />
        </Button>
      </div>
    </header>
  );
};

export default Header;
