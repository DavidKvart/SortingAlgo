import { Link } from "react-router-dom";
import gif from "../ms2.webp";

const MergeIntro = () => {
  return (
    <div className="flex-container">
      <div className="left-container">
        <div className="card text-center">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item ">
                <Link className="nav-link active " aria-current="true" to="/merge/intro">
                  Intro
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/merge/sum">
                  Summary
                </Link>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <div>
              <h1>Merge Sort</h1>
              <p>Merge sort is a sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array.</p>
              <p>In simple terms, we can say that the process of merge sort is to divide the array into two halves, sort each half, and then merge the sorted halves back together. This process is repeated until the entire array is sorted.</p>
              <p>One thing that you might wonder is what is the specialty of this algorithm. We already have a number of sorting algorithms then why do we need this algorithm? One of the main advantages of merge sort is that it has a time complexity of O(n log n), which means it can sort large arrays relatively quickly. It is also a stable sort, which means that the order of elements with equal values is preserved during the sort.</p>
              <p>Merge sort is a popular choice for sorting large datasets because it is relatively efficient and easy to implement. It is often used in conjunction with other algorithms, such as quicksort, to improve the overall performance of a sorting routine.</p>
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

export default MergeIntro;
