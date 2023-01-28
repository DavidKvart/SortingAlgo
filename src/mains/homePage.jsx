import sortingBackround from "../algorithims-compo/sortingBackround.jpg";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  function changeURl() {
    navigate("/choose");
  }
  return (
    <div className="homepage">
      <div className="px-4 pt-5 my-5 text-center border-bottom ">
        <h1 className="display-4 fw-bold">Sorting with David</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">In ower free online srting courser you will learn all of the main sorting algorithims , you will read and understand how each algorithem works with visual effect to help you learn! /n you will find codding examples to show you exacly how the algorithem can be used in java script! .</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button onClick={() => changeURl()} type="button" className="btn btn-dark btn-lg px-4 me-sm-3">
              I want to learn !
            </button>
          </div>
        </div>
        <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
          <div className="container px-5">
            <img src={sortingBackround} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
