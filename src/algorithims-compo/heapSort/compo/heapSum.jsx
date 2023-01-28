import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { HeapContext } from "../heapAlgo";
import Prism from "prismjs";
import "../../../prism.css";

const HeapSummary = () => {
  const { heapSort, display } = useContext(HeapContext);
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
                <Link className="nav-link  " aria-current="true" to="/heap/intro">
                  Intro
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/heap/sum">
                  Summary
                </Link>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <div className="card-text text-wrap">
              <h2>Heap sorting</h2>
              <pre>
                <code className="language-javascript">{`
  // main function - only called once
  async function heapSort(arr) {
    let length = arr.length;
    // gives the last parent in the binary tree
    let lastParentNode = Math.floor(length / 2 - 1);
    // gives the last node in the array
    let lastChild = length - 1;

    // untill last parent is out of bound
    while (lastParentNode >= 0) {
      // calles the sort function with the last parent and 
      // then goes to the next parent backword
      heapify(arr, length, lastParentNode);
      lastParentNode--;
    }
    // goes throw the array from right to left
    while (lastChild >= 0) {
      // replace the last child with the top of the peramid
      // you can see this phase with the green marker on the diagram in the righrt
      [arr[0], arr[lastChild]] = [arr[lastChild], arr[0]];
      // calles the sorting function with the lst chiled
      // and the parent node is the new first element
      heapify(arr, lastChild, 0);
      lastChild--;
    }

    return arr;
  }

// the function that sortes a 3 node binary tree
  async function heapify(arr, length, parentIndex) {
    // sets the values for the 3 node binary tree from 
    // the single dimention array
    let largest = parentIndex;
    let left = parentIndex * 2 + 1;
    let right = left + 1;

    // this if and the next one sort the inner tree
    if (left < length && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right < length && arr[right] > arr[largest]) {
      largest = right;
    }
    // if the tree is not sorted
    if (largest !== parentIndex) {
      // swap the parent node with the largest value
      [arr[parentIndex], arr[largest]] = [arr[largest], arr[parentIndex]];
      // calles the sort function with the same parent node
      heapify(arr, length, largest);
    }
    return arr;
  }
`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="right-container">
        <button onClick={() => heapSort()} className="btn btn-dark">
          start
        </button>
        <div className="card sum-display">{display}</div>
      </div>
    </div>
  );
};

export default HeapSummary;
