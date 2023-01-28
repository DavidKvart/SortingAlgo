import { Outlet } from "react-router-dom";
import "../bubbleSort/bubble.css";
import SelectionProvider from "./selectionAlgo";

const SelectionSort = () => {
  return (
    <div>
      <SelectionProvider>
        <Outlet />
      </SelectionProvider>
    </div>
  );
};

export default SelectionSort;
