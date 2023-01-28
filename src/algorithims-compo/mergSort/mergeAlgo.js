import React from "react";
import { useState } from "react";
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
export const MergeContext = React.createContext("");

let array = [];
for (let i = 0; i < 150; i++) {
  let temp = Math.floor(Math.random() * 250);
  array.push(temp);
}
const MergeProvider = ({ children }) => {
  const [display, setDisplay] = useState([]);

  function merge(leftArr, rightArr) {
    let sortedArr = [];
    let left = 0;
    let right = 0;

    while (left < leftArr.length && right < rightArr.length) {
      if (leftArr[left] < rightArr[right]) {
        sortedArr.push(leftArr[left]);
        left++;
      } else {
        sortedArr.push(rightArr[right]);
        right++;
      }
    }

    let final = [...sortedArr, ...leftArr.slice(left), ...rightArr.slice(right)];

    return final;
  }

  async function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middle);
    const rightArr = arr.slice(middle);
    let left = await mergeSort(leftArr);

    let right = await mergeSort(rightArr);
    let merged = await merge(left, right);
    await sleep(1000);
    return merged;
  }
  console.log(mergeSort([5, 1, 2, 3, 6, 9, 8, 7, 4, 55, 12]));

  return <MergeContext.Provider value={{ display }}>{children}</MergeContext.Provider>;
};
export default MergeProvider;
