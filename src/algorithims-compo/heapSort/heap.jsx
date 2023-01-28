import { Outlet } from "react-router-dom";
import "../bubbleSort/bubble.css";
import HeapProvider from "./heapAlgo";

const HeapSort = () => {
  return (
    <div>
      <HeapProvider>
        <Outlet />
      </HeapProvider>
    </div>
  );
};

export default HeapSort;
