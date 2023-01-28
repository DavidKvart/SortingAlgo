import { Link } from "react-router-dom";
import gif from "../Heap_sort_example.gif";

const HeapIntro = () => {
  return (
    <div className="flex-container">
      <div className="left-container">
        <div className="card text-center">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item ">
                <Link className="nav-link active " aria-current="true" to="/heap/intro">
                  Intro
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/heap/sum">
                  Summary
                </Link>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <div className="card-text text-wrap">
              <div>
                <h1>Heap Sort</h1>
                <p>In computer science, heapsort is a comparison-based sorting algorithm. Heapsort can be thought of as an improved selection sort: like selection sort, heapsort divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element from it and inserting it into the sorted region. Unlike selection sort, heapsort does not waste time with a linear-time scan of the unsorted region; rather, heap sort maintains the unsorted region in a heap data structure to more quickly find the largest element in each step</p>
              </div>
            </div>
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

export default HeapIntro;
