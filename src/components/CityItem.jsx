import React from "react";
import styles from "../styles/components/CityItem.module.scss";
import { Link } from "react-router-dom";
import useAppContext from "../hooks/useAppContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityItem = ({ city }) => {
  const { cityName, emoji, date, id, position } = city;
  const { currentCity, deleteCity } = useAppContext();

  const handleDeleteClick = (e) => {
    e.preventDefault();
    deleteCity(id);
  };

  return (
    <li>
      <Link
        key={id}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={`${styles.cityItem} 
       ${currentCity.id === id ? styles["cityItem--active"] : ""}
        }`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.data}>({formatDate(date)})</time>
        <button className={styles.deleteBtn} onClick={handleDeleteClick}>
          &#10006;
        </button>
      </Link>
    </li>
  );
};

export default CityItem;
