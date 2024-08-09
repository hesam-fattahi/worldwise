import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import useFetchCityData from "../../hooks/useFetchCityData";
import useUrlPosition from "../../hooks/useUrlPosition";
import useAppContext from "../../hooks/useAppContext";

import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Loader from "../../ui/Loader";
import Message from "../../ui/Message";

const AddCityForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      cityName: "",
      country: "",
      date: new Date(),
      notes: "",
      emoji: "",
    },
  });

  const [lat, lng] = useUrlPosition();
  const navigate = useNavigate();
  const { postCity } = useAppContext();
  const {
    cityData,
    error: cityDataError,
    isLoading,
  } = useFetchCityData({ lat, lng });

  useEffect(() => {
    if (cityData) {
      console.log(cityData);

      setValue("cityName", cityData.cityName);
      setValue("emoji", cityData.emoji);
      setValue("country", cityData.country);
    }
  }, [cityData, setValue]);

  const onSubmit = async (data) => {
    const newCity = {
      ...data,
      position: { lat: Number(lat), lng: Number(lng) },
    };

    await postCity(newCity);
    navigate("../cities");
  };

  if (!lat && !lng)
    return <Message>Start by clicking somewhere on the map</Message>;
  if (isSubmitting || isLoading) return <Loader />;
  if (cityDataError) return <Message>{cityDataError}</Message>;

  return (
    <Form
      className="bg-zinc-600 overflow-y-scroll h-max max-h-[65vh]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormRow label="City name" error={errors.cityName?.message}>
        <Input
          {...register("cityName", { required: "This field can't be empty." })}
        />
        <span className="absolute top-6 right-4 text-3xl text-zinc-300">
          {cityData.emoji}
        </span>
      </FormRow>
      <FormRow label="Date visited" error={errors.date?.message}>
        <DatePicker
          id="date"
          className="py-2 px-4 rounded-md bg-transparent border focus:outline-none focus:ring-2 focus:ring-green-500 border-zinc-400"
          dateFormat="dd/MM/yyyy"
          selected={new Date()}
          onChange={(date) => setValue("date", date)}
        />
      </FormRow>
      <FormRow label="Notes">
        <textarea
          {...register("notes")}
          className="py-2 px-4 rounded-md bg-transparent border focus:outline-none focus:ring-2 focus:ring-green-500 w-full border-zinc-400"
        />
      </FormRow>
      <div className="flex justify-end gap-4">
        <Button onClick={() => navigate("../cities")} variant="secondary">
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          Add
        </Button>
      </div>
    </Form>
  );
};

export default AddCityForm;
