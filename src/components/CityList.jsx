import React from "react";
import styles from "../styles/components/CityList.module.scss";

import CityItem from "./CityItem";
import Loader from "./Loader";
import Message from "./Message";
import useAppContext from "../hooks/useAppContext";

const CityList = () => {
  const { cities, isLoading } = useAppContext();

  if (isLoading) return <Loader />;
  else if (!cities.length)
    return <Message>Start adding countries to the list.</Message>;
  else {
    return (
      <ul className={styles.cityList}>
        {cities.map((city) => (
          <CityItem city={city} />
        ))}
      </ul>
    );
  }
};

export default CityList;
