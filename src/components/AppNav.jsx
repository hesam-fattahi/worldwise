import { NavLink } from "react-router-dom";
import styles from "../styles/components/AppNav.module.scss";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries" className={styles.active}>
            Countries
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
