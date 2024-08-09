import useCountries from "../../hooks/useCountries";
import CountryItem from "./CountryItem";

const CountryList = () => {
  const countries = useCountries();

  return (
    <ul className="max-h-[62vh] mt-2 grid grid-cols-1 gap-4 overflow-x-hidden overflow-y-scroll sm:grid-cols-2 2xl:grid-cols-3">
      {countries.map((country, index) => (
        <CountryItem key={country + index} country={country} />
      ))}
    </ul>
  );
};

export default CountryList;
