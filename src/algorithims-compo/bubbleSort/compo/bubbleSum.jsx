import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { BubbleContext } from "../bubbleContext";
import Prism from "prismjs";
import "../../../prism.css";
const BubbleSummary = () => {
  const { display, start } = useContext(BubbleContext);
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
                <Link className="nav-link  " aria-current="true" to="/bubble/intro">
                  Intro
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/bubble/sum">
                  Summary
                </Link>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <pre>
              <code className="language-javascript">{`
function bubbleSort() {
  ///  i indicates the number of rotaition on the array
    for (let i = 0; i < arr.length - 1; i++) {
     // j indicates the pointers of each iteraition
      for (let j = 0; j < arr.length - 1 - i; j++) {
        /// checks if the order of element is not correct
        if (arr[j] > arr[j + 1]) {
          // swaps if needed
          // on swap the index on the right diagram swich clolor 
         const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
      //here we finished an iteraition
   }
}
`}</code>
            </pre>
            {/* <div className="card-text text-wrap">
              <h2>Bubble sorting</h2>
              <p> Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the input list element by element, comparing the current element with the one after it, swapping their values if needed. These passes through the list are repeated until no swaps had to be performed during a pass, meaning that the list has become fully sorted. The algorithm, which is a comparison sort, is named for the way the larger elements "bubble" up to the top of the list.</p>

              <p> This simple algorithm performs poorly in real world use and is used primarily as an educational tool. More efficient algorithms such as quicksort, timsort, or merge sort are used by the sorting libraries built into popular programming languages such as Python and Java.</p>
            </div> */}
          </div>
        </div>
      </div>

      <div className="right-container">
        <button className="btn btn-dark" onClick={() => start()}>
          start
        </button>
        <div className="card sum-display">{display}</div>
      </div>
    </div>
  );
};

export default BubbleSummary;
