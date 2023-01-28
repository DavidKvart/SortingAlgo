import React from "react";
import { useState } from "react";
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
export const HeapContext = React.createContext("");

const HeapProvider = ({ children }) => {
  let firstValue = [];
  let array = [];
  let arrayIndexes = [];
  for (let i = 0; i < 150; i++) {
    let temp = Math.floor(Math.random() * 250);
    array.push(temp);
    firstValue.push(<div className="displayCol" style={{ height: `${temp}px` }}></div>);
  }
  const [display, setDisplay] = useState(firstValue);

  async function heapSort() {
    let tempDisplay = [];
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

      tempDisplay = arr.map((val, index) => {
        if (index == 0 || index == lastChild) return <div className="displayCol-corrent" style={{ height: `${val}px` }}></div>;
        else return <div className="displayCol" style={{ height: `${val}px` }}></div>;
      });

      setDisplay(tempDisplay);
      await sleep(50);
      heapify(arr, lastChild, 0);
      lastChild--;
    }

    return arr;
  }

  async function heapify(arr, length, parentIndex) {
    let tempDisplay = [];
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

  return <HeapContext.Provider value={{ heapSort, display }}>{children}</HeapContext.Provider>;
};

export default HeapProvider;
