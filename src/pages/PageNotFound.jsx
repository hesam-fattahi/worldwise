import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col gap-2 justify-center items-center p-4 text-center">
      <h1>404</h1>
      <p className="mb-8">
        Uh-oh! We can't seem to find the page you're looking for.
      </p>
      <Button variant="primary" onClick={() => navigate("/")}>
        Take Me Home
      </Button>
    </div>
  );
};

export default PageNotFound;
