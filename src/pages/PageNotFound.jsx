import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  const handleHomePage = () => {
    navigate("/");
  };

  return (
    <div className="text-center ">
      <img
        src="https://i.pinimg.com/originals/bd/01/f6/bd01f6d7ea8f2dea0abf91d6d0adb7d8.gif" className=" w-auto" 
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

