import { Link } from "react-router-dom";

const Logo = ({ small, className }) => {
  return (
    <Link to="/">
      <img
        src="/logo.png"
        alt="WorldWise logo"
        className={`${small ? "h-10" : "h-14"} ${className}`}
      />
    </Link>
  );
};

export default Logo;
