import useAppContext from "../hooks/useAppContext";

const useCountries = () => {
  const { cities } = useAppContext();
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return countries;
};

export default useCountries;
