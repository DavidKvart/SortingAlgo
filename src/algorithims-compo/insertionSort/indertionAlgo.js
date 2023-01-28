import React from "react";
import { useState } from "react";
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
export const IncertionContext = React.createContext("");

const InsertionProvider = ({ children }) => {
  const [display, setDisplay] = useState([]);

  // generate random array//
  let arr = [];
  for (let i = 0; i < 150; i++) {
    arr.push(Math.floor(Math.random() * 250));
  }
  const [arrDisplay, setArrDisplay] = useState(
    arr.map((val) => {
      return <div className="displayCol" style={{ height: `${val}px` }}></div>;
    })
  );

  async function sorting() {
    let temp = [];
    for (let i = 0; i < 150; i++) {
      temp.push(arr[0]);
      arr.splice(0, 1);
      for (let j = temp.length - 1; j > 0; j--) {
        if (temp[j] < temp[j - 1]) {
          [temp[j], temp[j - 1]] = [temp[j - 1], temp[j]];

          let change = temp.map((val, index) => {
            if (index == j - 1) return <div className="displayCol-corrent" style={{ height: `${val}px` }}></div>;
            return <div className="displayCol" style={{ height: `${val}px` }}></div>;
          });
          let buttonArray = arr.map((val, index) => {
            if (index == 0) return <div className="displayCol-corrent" style={{ height: `${val}px` }}></div>;
            return <div className="displayCol" style={{ height: `${val}px` }}></div>;
          });
          setDisplay(change);
          setArrDisplay(buttonArray);
          await sleep(2);
        } else {
          break;
        }
      }
      console.log(i);
    }
  }

  return <IncertionContext.Provider value={{ arrDisplay, display, sorting }}>{children}</IncertionContext.Provider>;
};

export default InsertionProvider;
