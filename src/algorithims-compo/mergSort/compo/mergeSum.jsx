import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Prism from "prismjs";
import "../../../prism.css";
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
const MergeSummary = () => {
  const [array, setArray] = useState([]);
  const [start, setStart] = useState(false);
  const [display, setDisplay] = useState([]);
  const [mergedDisplay, setMergedDisplay] = useState([]);

  useEffect(() => {
    Prism.highlightAll();
    let arr = [];
    for (let i = 0; i < 160; i++) {
      let temp = Math.floor(Math.random() * 250);
      if (i < 40) arr.push([temp, "#ef476f"]);
      else if (i < 80) arr.push([temp, "#06d6a0"]);
      else if (i < 120) arr.push([temp, "#ffd166"]);
      else arr.push([temp, "#118ab2"]);
    }
    setArray(arr);
    console.log(arr);

    setDisplay(
      arr.map((val, index) => {
        if (index < 40) return <div className="displayCol" style={{ height: `${val[0]}px`, backgroundColor: `${val[1]}` }}></div>;
        else if (index < 80) return <div className="displayCol" style={{ height: `${val[0]}px`, backgroundColor: `${val[1]}` }}></div>;
        else if (index < 120) return <div className="displayCol" style={{ height: `${val[0]}px`, backgroundColor: `${val[1]}` }}></div>;
        else return <div className="displayCol" style={{ height: `${val[0]}px`, backgroundColor: `${val[1]}` }}></div>;
      })
    );
  }, []);

  useEffect(() => {
    let arrToDisplay = [];
    if (start) {
      function merge(leftArr, rightArr) {
        let sortedArr = [];
        let left = 0;
        let right = 0;

        while (left < leftArr.length && right < rightArr.length) {
          if (leftArr[left][0] < rightArr[right][0]) {
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

        console.log(merged);
        if (merged.length === 40) {
          if (merged[0][1] === "#ef476f") {
            let temp = [];
            temp = merged.map((val) => {
              return <div className="displayCol" style={{ height: `${val[0]}px`, backgroundColor: `${val[1]}` }}></div>;
            });
            arrToDisplay.push(...temp);
            let tempState = [...display];
            tempState.splice(0, 40);
            arrToDisplay.push(...tempState);
            setDisplay(arrToDisplay);
          }
          if (merged[0][1] === "#ffd166") {
            let temp = [];
            temp = merged.map((val) => {
              return <div className="displayCol" style={{ height: `${val[0]}px`, backgroundColor: `${val[1]}` }}></div>;
            });
            arrToDisplay.splice(80, 40, ...temp);
            setDisplay(arrToDisplay);
          }
        }
        if (merged.length === 80) {
          if (merged[0][1] === "#ef476f" || merged[0][1] === "#06d6a0") {
            let temp = [];
            temp = merged.map((val) => {
              return <div className="displayCol" style={{ height: `${val[0]}px`, backgroundColor: `${val[1]}` }}></div>;
            });
            arrToDisplay = [...temp];
            let tempState = [...display];
            tempState.splice(0, 80);
            arrToDisplay.push(...tempState);
            setDisplay(arrToDisplay);
          }
          if (merged[0][1] === "#ffd166" || merged[0][1] === "#118ab2") {
            let temp = [];
            temp = merged.map((val) => {
              return <div className="displayCol" style={{ height: `${val[0]}px`, backgroundColor: `${val[1]}` }}></div>;
            });
            arrToDisplay.splice(80, 80, ...temp);

            setDisplay(arrToDisplay);
          }
        }
        let tempDisplay = merged.map((val) => {
          return <div className="displayCol" style={{ height: `${val[0]}px`, backgroundColor: `${val[1]}` }}></div>;
        });

        setMergedDisplay(tempDisplay);

        await sleep(80);
        return merged;
      }
      console.log(mergeSort(array));
    }
  }, [start]);
  function startDisplay() {
    setStart(true);
  }

  return (
    <div className="flex-container">
      <div className="left-container" style={{ width: "60%" }}>
        <div className="card text-center">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item ">
                <Link className="nav-link  " aria-current="true" to="/merge/intro">
                  Intro
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/merge/sum">
                  Summary
                </Link>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <h2>Merge sort sorting</h2>
            <pre>
              <code className="language-javascript">{`
// this part is for the react display
useEffect(() => {
  // array that will hold the displayed div's
  let arrToDisplay = [];
    // on button press the fun begins
    if (start) {

      // this function takes 2 sorted array and combine them 
      // into 1 sorted array 
      // you can see this function in action 6 times in the diagram
      // when each qurter is combined and when the halfs combine
      function merge(leftArr, rightArr) {
        
        let sortedArr = [];
        // declare index for both the arrays
        let left = 0;
        let right = 0;

        // while both of the arrays got values
        while (left < leftArr.length && right < rightArr.length) {
          // checks wich number is begger betwin the 0 value index
          // of both of the arrays
          if (leftArr[left][0] < rightArr[right][0]) {
            // pushes the smalles value
            sortedArr.push(leftArr[left]);
            left++;
          } else {
            sortedArr.push(rightArr[right]);
            right++;
          }
        }
        // return the array after one of them is empty and what is left from the other
        let final = [...sortedArr, ...leftArr.slice(left), ...rightArr.slice(right)];

        return final;
      }

      // this function separate th given array into 2 halfs and it is called
      // untill the one array with length 150 array is 150 arrays with length 1
      // you can see it in the console log if you want to see
      async function mergeSort(arr) {
        if (arr.length <= 1) {
          return arr;
        }
        // creates 2 arrays that thiere size and value are half of the origin
        const middle = Math.floor(arr.length / 2);
        const leftArr = arr.slice(0, middle);
        const rightArr = arr.slice(middle);

        // calls it self on each of the array created
        let left = await mergeSort(leftArr);
        let right = await mergeSort(rightArr);
        let merged = await merge(left, right);

        // from here its only for the react style
        //////////////////////////////////////////
        if (merged.length === 40) {
          if (merged[0][1] === "#ef476f") {
            let temp = [];
            temp = merged.map((val) => {
              return <div className="displayCol" style={{ height: {val[0]}px, backgroundColor: {val[1]} }}></div>;
            });
            arrToDisplay.push(...temp);
            let tempState = [...display];
            tempState.splice(0, 40);
            arrToDisplay.push(...tempState);
            setDisplay(arrToDisplay);
          }
          if (merged[0][1] === "#ffd166") {
            let temp = [];
            temp = merged.map((val) => {
              return <div className="displayCol" style={{ height: {val[0]}px, backgroundColor: {val[1]} }}></div>;
            });
            arrToDisplay.splice(80, 40, ...temp);
            setDisplay(arrToDisplay);
          }
        }
        if (merged.length === 80) {
          if (merged[0][1] === "#ef476f" || merged[0][1] === "#06d6a0") {
            let temp = [];
            temp = merged.map((val) => {
              return <div className="displayCol" style={{ height: {val[0]}px, backgroundColor: {val[1]} }}></div>;
            });
            arrToDisplay = [...temp];
            let tempState = [...display];
            tempState.splice(0, 80);
            arrToDisplay.push(...tempState);
            setDisplay(arrToDisplay);
          }
          if (merged[0][1] === "#ffd166" || merged[0][1] === "#118ab2") {
            let temp = [];
            temp = merged.map((val) => {
              return <div className="displayCol" style={{ height: '{val[0]}px, backgroundColor: {val[1]} }}></div>;
            });
            arrToDisplay.splice(80, 80, ...temp);

            setDisplay(arrToDisplay);
          }
        }
        let tempDisplay = merged.map((val) => {
          return <div className="displayCol" style={{ height: {val[0]}px, backgroundColor: {val[1]} }}></div>;
        });

        setMergedDisplay(tempDisplay);

        await sleep(80);

        // returns the sorted array
        return merged;
      }
    }
  }, [start])
             `}</code>
            </pre>
            ;
          </div>
        </div>
      </div>

      <div className="right-container">
        <button className="btn btn-dark" onClick={() => startDisplay()}>
          start
        </button>
        <div className="card sum-display">{display}</div>
        <div className="card sum-display">{mergedDisplay}</div>
      </div>
    </div>
  );
};

export default MergeSummary;
