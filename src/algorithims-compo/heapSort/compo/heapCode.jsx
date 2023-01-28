import { Link } from "react-router-dom";
import Prism from "prismjs";
import "../../../prism.css";
import { useEffect } from "react";

const HeapCode = () => {
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
                <Link className="nav-link  " aria-current="true" to="/heap/intro">
                  Intro
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="true" to="/heap/code">
                  Code
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
              <h2>Heap sorting</h2>
              <p>
                in the following code, you can see two reception functions, the main function is the heapSort() function that makes sure the intire array is sorted.<br></br> <br /> the seconed function heapify(), sorts a 3 node tree , by calling hypify for each element in the binary tree we can sort the entire array.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="right-container">
        <div className="card ">
          <pre>
            <code className="language-javascript">{`
  async function heapSort() {
    let arr = array;
    let length = arr.length;
    let lastParentNode = Math.floor(length / 2 - 1);
    let lastChild = length - 1;

    while (lastParentNode >= 0) {
      heapify(arr, length, lastParentNode);
      lastParentNode--;
    }
    while (lastChild >= 0) {
      [arr[0], arr[lastChild]] = [arr[lastChild], arr[0]];
      heapify(arr, lastChild, 0);
      lastChild--;
    }

    return arr;
  }

  async function heapify(arr, length, parentIndex) {
    let largest = parentIndex;
    let left = parentIndex * 2 + 1;
    let right = left + 1;
    if (left < length && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right < length && arr[right] > arr[largest]) {
      largest = right;
    }
    if (largest !== parentIndex) {
      [arr[parentIndex], arr[largest]] = [arr[largest], arr[parentIndex]];
      heapify(arr, length, largest);
    }
    return arr;
  }
`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default HeapCode;
