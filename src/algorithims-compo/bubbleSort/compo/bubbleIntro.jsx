import { Link } from "react-router-dom";
import gif from "../bubble.gif";

const BubbleIntro = () => {
  return (
    <div className="flex-container">
      <div className="left-container">
        <div className="card text-center">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item ">
                <Link className="nav-link active " aria-current="true" to="/bubble/intro">
                  Intro
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/bubble/sum">
                  Summary
                </Link>
              </li>
            </ul>
          </div>
          <div className="card-body text-wrap">
            <h2>Bubble sorting</h2>
            <p> Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the input list element by element, comparing the current element with the one after it, swapping their values if needed. These passes through the list are repeated until no swaps had to be performed during a pass, meaning that the list has become fully sorted. The algorithm, which is a comparison sort, is named for the way the larger elements "bubble" up to the top of the list.</p>
          </div>
        </div>
      </div>

      <div className="right-container">
        <div className="card gif">
          <img className="main-sec" src={gif} />
        </div>
      </div>
    </div>
  );
};

export default BubbleIntro;
