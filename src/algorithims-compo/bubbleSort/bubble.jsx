import { Outlet } from "react-router-dom";
import "./bubble.css";
import BubbleProvider from "./bubbleContext";
const BubbleSort = () => {
  return (
    <div>
      <BubbleProvider>
        <Outlet />
      </BubbleProvider>
    </div>
  );
};

export default BubbleSort;
