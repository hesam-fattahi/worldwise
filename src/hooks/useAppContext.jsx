import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("Context is being used outside of the Provider.");
  return context;
};

export default useAppContext;
