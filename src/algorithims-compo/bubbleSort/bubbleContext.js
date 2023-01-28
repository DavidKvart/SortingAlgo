import React from "react";
import { useState } from "react";
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const BubbleContext = React.createContext("");

const BubbleProvider = ({ children }) => {
  let firstValue = [];
  let arr = [];
  for (let i = 0; i < 150; i++) {
    let temp = Math.floor(Math.random() * 250);
    arr.push(temp);
    firstValue.push(<div className="displayCol" style={{ height: `${temp}px` }}></div>);
  }
  const [display, setDisplay] = useState(firstValue);

  async function start() {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;

          let tempDisplay = arr.map((val, index) => {
            if (index == j || index == j + 1) return <div className="displayCol-corrent" style={{ height: `${val}px` }}></div>;
            else return <div className="displayCol" style={{ height: `${val}px` }}></div>;
          });
          await sleep(2);
          setDisplay(tempDisplay);
        }
      }
    }
  }

  return <BubbleContext.Provider value={{ display, start }}>{children}</BubbleContext.Provider>;
};

export default BubbleProvider;
