import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAppContext from "../../hooks/useAppContext";

import Loader from "../../ui/Loader";
import Message from "../../ui/Message";
import Button from "../../ui/Button";
import CityDetailsRow from "./CityDetailsRow";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function CityDetails() {
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
        There seems to be a problem with loading this city.
        <br />
        Maybe you can click on the cities button above and try again?
      </Message>
    );

  return (
    <div className="py-5 px-7 mb-4 h-full bg-zinc-600 rounded-md overflow-scroll flex flex-col gap-6">
      <CityDetailsRow title="City name">
        <h3 className="text-xl">{cityName}</h3>
      </CityDetailsRow>
      <CityDetailsRow title="Date visited">
        <p>{formatDate(date || null)}</p>
      </CityDetailsRow>

      {notes && (
        <CityDetailsRow title="Your notes">
          <p>{notes}</p>
        </CityDetailsRow>
      )}

      <CityDetailsRow title="Learn more">
        <a
          className="underline hover:text-green-500"
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia →
        </a>
      </CityDetailsRow>

      <Button
        className="w-fit mt-auto"
        variant="secondary"
        onClick={() => navigate(-1)}
      >
        {" "}
        &larr; Back
      </Button>
    </div>
  );
}

export default CityDetails;
