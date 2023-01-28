import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { SelectionContext } from "../selectionAlgo";
import Prism from "prismjs";
import "../../../prism.css";
const SelectionSummary = () => {
  const { display, selectionSort } = useContext(SelectionContext);
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="flex-container">
      <div className="left-container">
        <div className="card text-center">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item ">
                <Link className="nav-link  " aria-current="true" to="/selection/intro">
                  Intro
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/selection/sum">
                  Summary
                </Link>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <pre>
              <code className="language-javascript">
                {`
  function selectionSort() {
    // loop throw the array N times
    for (let i = 0; i < arr.length - 1; i++) {
      // sets the min element for a rotation
      let minIndex = i;
      // loop throw the rest of theleft side of the array
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          // when find new min index it swaps , 
          // you can see it happen with the orange marker
          minIndex = j;
        }
      }
      // takes the min element to the left - green marker
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
  }
`}
              </code>
            </pre>
          </div>
        </div>
      </div>

      <div className="right-container">
        <button onClick={() => selectionSort()} className="btn btn-dark">
          start
        </button>
        <div className="card sum-display">{display}</div>
      </div>
    </div>
  );
};

export default SelectionSummary;
