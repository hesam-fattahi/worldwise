import React, {
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from "react";

const BASE_URL = `http://localhost:9000/cities`;

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
        error: null,
      };

    case "city/loaded":
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
        error: null,
      };

    case "city/posted":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error("Invalid action type.");
  }
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cities, isLoading, currentCity, error } = state;

  const fetchCities = useCallback(() => {
    const controller = new AbortController();
    dispatch({ type: "loading" });

    fetch(BASE_URL, { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "cities/loaded", payload: data });
      })
      .catch(() =>
        dispatch({
          type: "rejected",
          payload: `🌐 Oops, we hit a snag fetching city details. Please refresh or check back soon!`,
        })
      );

    return () => controller.abort();
  }, []);

  // fetch cities list
  useEffect(fetchCities, [fetchCities]);

  const getCity = useCallback(
    async (id) => {
      if (Number(id) === currentCity.id) return;

      dispatch({ type: "loading" });
      try {
        const res = await fetch(`${BASE_URL}/${id}`);
        const data = await res.json();
        dispatch({ type: "city/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: `📍 Quick detour! This city seems to be just out of reach. Tap on the cities list to continue exploring!`,
        });
      }
    },
    [currentCity.id]
  );

  const postCity = async (newCity) => {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${BASE_URL}`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: { "Content-type": "application/json" },
      });
      const data = await res.json();
      dispatch({ type: "city/posted", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload:
          "There seems to be a problem with adding the city to your list.",
      });
    }
  };

  const deleteCity = async (id) => {
    dispatch({ type: "loading" });
    try {
      await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "city/deleted", payload: id });
    } catch {
      dispatch({ type: "rejected" });
    }
  };

  return (
    <AppContext.Provider
      value={{
        cities,
        isLoading,
        error,
        currentCity,
        getCity,
        postCity,
        deleteCity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
