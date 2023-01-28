import { Link } from "react-router-dom";
import gif from "../Insertion-sort-example.gif";

const InsertionIntro = () => {
  return (
    <div className="flex-container">
      <div className="left-container">
        <div className="card text-center">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item ">
                <Link className="nav-link active " aria-current="true" to="/insertion/intro">
                  Intro
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/insertion/sum">
                  Summary
                </Link>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <div>
              <h1>Insertion Sort</h1>
              <p>Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.</p>
              <h4>Characteristics of Insertion Sort:</h4>
              <ul>
                <li>This algorithm is one of the simplest algorithm with simple implementation</li>
                <li>Basically, Insertion sort is efficient for small data values</li>
                <li>Insertion sort is adaptive in nature, i.e. it is appropriate for data sets which are already partially sorted.</li>
              </ul>
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

export default InsertionIntro;
