import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./homePage";
import ChooseMenu from "./chooseMenu";
//bubble//
import BubbleSort from "../algorithims-compo/bubbleSort/bubble";
import BubbleSummary from "../algorithims-compo/bubbleSort/compo/bubbleSum";
import BubbleIntro from "../algorithims-compo/bubbleSort/compo/bubbleIntro";
// heap//
import HeapIntro from "../algorithims-compo/heapSort/compo/heapIntro";
import HeapSummary from "../algorithims-compo/heapSort/compo/heapSum";
import HeapSort from "../algorithims-compo/heapSort/heap";
//insertion//
import InsertionSort from "../algorithims-compo/insertionSort/insertion";
import InsertionSummary from "../algorithims-compo/insertionSort/compo/insertionSum";
import InsertionIntro from "../algorithims-compo/insertionSort/compo/insertionIntro";
//selection//
import SelectionSort from "./../algorithims-compo/selectionSort/selection";
import SelectionIntro from "../algorithims-compo/selectionSort/compo/selectionIntro";
import SelectionSummary from "../algorithims-compo/selectionSort/compo/selectionSum";
//merge//
import MergeSort from "./../algorithims-compo/mergSort/merge";
import MergeIntro from "../algorithims-compo/mergSort/compo/mergeIntro";
import MergeSummary from "../algorithims-compo/mergSort/compo/mergeSum";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="mainPart">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/choose" element={<ChooseMenu />} />
          {/* bubble */}
          <Route path="bubble" element={<BubbleSort />}>
            <Route path="sum" element={<BubbleSummary />} />
            <Route path="intro" element={<BubbleIntro />} />
          </Route>
          {/* heap */}
          <Route path="/heap" element={<HeapSort />}>
            <Route path="sum" element={<HeapSummary />} />
            <Route path="intro" element={<HeapIntro />} />
          </Route>
          {/* insertion */}
          <Route path="/insertion" element={<InsertionSort />}>
            <Route path="sum" element={<InsertionSummary />} />
            <Route path="intro" element={<InsertionIntro />} />
          </Route>
          {/* merge */}
          <Route path="/merge" element={<MergeSort />}>
            <Route path="intro" element={<MergeIntro />} />
            <Route path="sum" element={<MergeSummary />} />
          </Route>
          {/* selection */}
          <Route path="/selection" element={<SelectionSort />}>
            <Route path="intro" element={<SelectionIntro />} />
            <Route path="sum" element={<SelectionSummary />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
