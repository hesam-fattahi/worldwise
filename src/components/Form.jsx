import { useEffect, useState } from "react";
import styles from "../styles/components/Form.module.scss";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "./Button";
import btnStyles from "../styles/components/Button.module.scss";
import useUrlPosition from "../hooks/useUrlPosition";
import Message from "./Message";
import Loader from "./Loader";
import useAppContext from "../hooks/useAppContext";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

// eslint-disable-next-line react-refresh/only-export-components
export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");
  const [lat, lng] = useUrlPosition();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { postCity } = useAppContext();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat: Number(lat), lng: Number(lng) },
    };

    await postCity(newCity);
    // setNotes("");
    // setDate(new Date());
    navigate("../cities");
  };

  useEffect(() => {
    setIsLoading(true);
    setNotes("");
    setDate(new Date());
    setError(false);
    fetch(`${BASE_URL}/?latitude=${lat}&longitude=${lng}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.countryCode)
          throw new Error(
            "Oops! It seems you’ve wandered off the city grid. Try Clicking on a city instead. "
          );

        setCityName(data.city || data.locality);
        setEmoji(convertToEmoji(data.countryCode));
        setCountry(data.countryName);
      })
      .catch((err) => {
        setError(err.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, [lat, lng, error]);

  if (!lat && !lng)
    return <Message>Start by clicking somewhere on the map</Message>;
  if (isLoading) return <Loader />;
  if (error) return <Message>{error}</Message>;
  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <DatePicker
          id="data"
          dateFormat="dd/MM/yyyy"
          selected={date}
          onChange={(d) => setDate(d)}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button
          onClick={() => navigate("../cities")}
          className={btnStyles.back}
        >
          <span>&larr;</span>
          Back
        </Button>
        <Button type="submit" className={btnStyles.primary}>
          <span>+</span>
          Add
        </Button>
      </div>
    </form>
  );
}

export default Form;
