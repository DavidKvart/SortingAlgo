import React from "react";
import { useState } from "react";
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
export const SelectionContext = React.createContext("");

const SelectionProvider = ({ children }) => {
  let arr = [];
  for (let i = 0; i < 150; i++) {
    arr.push(Math.floor(Math.random() * 250));
  }
  const [display, setDisplay] = useState(
    arr.map((val) => {
      return <div className="displayCol" style={{ height: `${val}px` }}></div>;
    })
  );

  async function selectionSort() {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      let temp = arr.map((val, index) => {
        if (index == i) return <div className="displayCol-corrent" style={{ height: `${val}px` }}></div>;
        if (index == minIndex) return <div className="displayCol-corrent-orange" style={{ height: `${val}px` }}></div>;
        return <div className="displayCol" style={{ height: `${val}px` }}></div>;
      });
      setDisplay(temp);
      await sleep(80);
    }
    return arr;
  }

  return <SelectionContext.Provider value={{ display, selectionSort }}>{children}</SelectionContext.Provider>;
};
export default SelectionProvider;
