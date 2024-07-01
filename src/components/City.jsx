import React, { useEffect } from "react";
import styles from "../styles/components/City.module.scss";
import btnStyles from "../styles/components/Button.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import useAppContext from "../hooks/useAppContext";
import Loader from "./Loader";
import Message from "./Message";
import Button from "./Button";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  const { getCity, currentCity, isLoading, error } = useAppContext();
  const { cityName, date, notes } = currentCity;
  const navigate = useNavigate();

  useEffect(() => {
    getCity(id);
  }, [id, getCity]);

  if (isLoading) return <Loader />;
  if (error)
    return (
      <Message>
        There seems to be a problem with loading this city. Maybe you can click
        on the cities button above and try again?
      </Message>
    );

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>{cityName}</h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia →
        </a>
      </div>
      <Button className={btnStyles.back} onClick={() => navigate(-1)}>
        {" "}
        &larr; Back
      </Button>
    </div>
  );
}

export default City;
