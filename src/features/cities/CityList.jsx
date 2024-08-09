import useAppContext from "../../hooks/useAppContext";

import CityItem from "./CityItem";
import Loader from "../../components/ui/Loader";
import Message from "../../components/ui/Message";

const CityList = () => {
  const { cities, isLoading } = useAppContext();

  if (isLoading) return <Loader />;
  if (!cities.length)
    return (
      <Message>
        No cities here yet. <br /> You can start by adding cities to the list.
      </Message>
    );

  return (
    <ul className="h-[62vh] my-2 flex flex-col gap-2 overflow-y-scroll overflow-x-hidden">
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
};

export default CityList;
