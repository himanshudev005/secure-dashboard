import { useNavigate } from "react-router-dom";
import Button from "../../components/button";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full  h-96 flex justify-center items-center">
      <div className="w-1/2 h-1/2 border shadow-xl gap-5 text-xl font-semibold flex justify-center items-center flex-col">
        <div>404</div>
        <div>Development in Progress</div>
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
