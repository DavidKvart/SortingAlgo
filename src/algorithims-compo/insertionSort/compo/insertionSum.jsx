import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { IncertionContext } from "../indertionAlgo";
import Prism from "prismjs";
import "../../../prism.css";

const InsertionSummary = () => {
  const { arrDisplay, display, sorting } = useContext(IncertionContext);
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="flex-container">
      <div className="left-container" style={{ width: "60%" }}>
        <div className="card text-center">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item ">
                <Link className="nav-link  " aria-current="true" to="/insertion/intro">
                  Intro
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/insertion/sum">
                  Summary
                </Link>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <h2>Insertion sorting</h2>
            <pre>
              <code className="language-javascript">{`
async function sorting() {

  // this is the new array you can see on the top box
  let temp = [];
  
  // loops throw the origin array one from the buttom
  for (let i = 0; i < 150; i++) {
    // takes the first element from the buttom array
    temp.push(arr[0]);
    // removes the same element from the array
    arr.splice(0, 1);

    // loops throw the new array from left to right
    for (let j = temp.length - 1; j > 0; j--) {
      // use bubble sort on the new array to place the element
      // you can see this stage with the green line on the top box looping until finds the locaition
      if (temp[j] < temp[j - 1]) {
        [temp[j], temp[j - 1]] = [temp[j - 1], temp[j]];

        // used for the display
        let change = temp.map((val, index) => {
          if (index == j - 1) return <div className="displayCol-corrent" style={{ height: {val}px }}></div>;
          return <div className="displayCol" style={{ height: {val}px }}></div>;
        });
        
        // used for the display
        let buttonArray = arr.map((val, index) => {
          if (index == 0) return <div className="displayCol-corrent" style={{ height: {val}px }}></div>;
          return <div className="displayCol" style={{ height: {val}px }}></div>;
        });
        setDisplay(change);
        setArrDisplay(buttonArray);
        await sleep(2);
      } else {
        break;
      }
    }
    console.log(i);
  }
}
`}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="right-container">
        <button onClick={() => sorting()} className="btn btn-dark">
          start
        </button>
        <div className="card sum-display">{display}</div>
        <div className="card sum-display">{arrDisplay}</div>
      </div>
    </div>
  );
};

export default InsertionSummary;
