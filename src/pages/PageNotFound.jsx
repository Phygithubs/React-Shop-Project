import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  const handleHomePage = () => {
    navigate("/");
  };

  return (
    <div className="text-center ">
      <img
        src="https://i.pinimg.com/originals/8f/5a/0b/8f5a0bdaf6826934b115990e666bff53.gif" className=" w-auto" 
        alt=""
      />
      <br />
      <button
        onClick={handleHomePage}
        className="btn bg-blue-700 text-light px-3 fs-3 font-poppins"
      >
        Go Back
      </button>
    </div>
  );
}

export default PageNotFound;

