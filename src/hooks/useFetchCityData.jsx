import { useState, useEffect } from "react";
import convertToEmoji from "../utils/convertToEmoji";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

const useFetchCityData = ({ lat, lng }) => {
  const [cityData, setCityData] = useState({
    cityName: "",
    country: "",
    emoji: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCityData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${BASE_URL}/?latitude=${lat}&longitude=${lng}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch city data. Please try again later.");
        }

        const data = await response.json();

        if (!data.countryCode) {
          throw new Error(
            "Oops! It seems you’ve wandered off the city grid. Try clicking on a city instead."
          );
        }

        setCityData({
          cityName: data.city || data.locality,
          country: data.countryName,
          emoji: convertToEmoji(data.countryCode),
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (lat && lng) {
      fetchCityData();
    }
  }, [lat, lng]);

  return { cityData, error, isLoading };
};

export default useFetchCityData;
