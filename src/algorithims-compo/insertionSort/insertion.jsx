import { Outlet } from "react-router-dom";
import "../bubbleSort/bubble.css";
import InsertionProvider from "./indertionAlgo";

const InsertionSort = () => {
  return (
    <div>
      <InsertionProvider>
        <Outlet />
      </InsertionProvider>
    </div>
  );
};

export default InsertionSort;
