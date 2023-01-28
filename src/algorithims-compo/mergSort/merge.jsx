import { Outlet } from "react-router-dom";
import "../bubbleSort/bubble.css";
import MergeProvider from "./mergeAlgo";

const MergeSort = () => {
  return (
    <div>
      <MergeProvider>
        <Outlet />
      </MergeProvider>
    </div>
  );
};

export default MergeSort;
