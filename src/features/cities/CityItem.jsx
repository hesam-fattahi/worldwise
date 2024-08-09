import { Link } from "react-router-dom";
import useAppContext from "../../hooks/useAppContext";

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
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={`flex gap-4 items-center rounded-md cursor-pointer py-2 px-4 text-inherit hover:bg-zinc-600 duration-300
       ${currentCity.id === id ? "border-2 border-green-500" : ""}
        }`}
      >
        <span className="text-xl leading-none mb-1">{emoji}</span>
        <h3 className="text-lg mr-auto font-semibold text-nowrap">
          {cityName}
        </h3>
        <time className="text-xs font-semibold text-zinc-400">
          {formatDate(date)}
        </time>
        <button
          className="h-8 w-8 rounded-full hover:bg-zinc-600 grid place-items-center transition duration-200"
          onClick={handleDeleteClick}
        >
          &#10006;
        </button>
      </Link>
    </li>
  );
};

export default CityItem;
