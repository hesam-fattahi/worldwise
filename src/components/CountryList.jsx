import React from "react";
import styles from "../styles/components/CountryList.module.scss";

import CountryItem from "./CountryItem";
import useCountries from "../hooks/useCountries";

const CountryList = () => {
  const countries = useCountries();

  return (
    <ul className={styles.countryList}>
      {countries.map((country, index) => (
        <CountryItem key={country + index} country={country} />
      ))}
    </ul>
  );
};

export default CountryList;
