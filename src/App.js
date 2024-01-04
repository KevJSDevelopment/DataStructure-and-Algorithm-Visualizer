import Navbar from './Navbar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MultiplePointers from './containers/MultiplePointers'
import MergeSort from './containers/MergeSort';
import QuickSort from './containers/QuickSort';
import BubbleSort from './containers/BubbleSort';
import LinkedList from './containers/SingleLinkedList';
import BinarySearchTree from './containers/BinaryTree';
import BinaryHeap from './containers/BinaryHeap';
import HashMap from './containers/HashMap';
import Dijkstras from './containers/Dijkstras';

const App = () => {
  return (
      <div className="App h-screen flex flex-row">
        <BrowserRouter>
          <Navbar />
          <Routes>
                <Route path="/DataStructure-and-Algorithm-Visualizer/multiple-pointers" element={<MultiplePointers /> }/> 
                <Route path="/DataStructure-and-Algorithm-Visualizer/merge-sort" element={<MergeSort /> }/> 
                <Route path="/DataStructure-and-Algorithm-Visualizer/quick-sort" element={<QuickSort /> }/> 
                <Route path="/DataStructure-and-Algorithm-Visualizer/bubble-sort" element={<BubbleSort /> }/> 
                <Route path="/DataStructure-and-Algorithm-Visualizer/linked-list" element={<LinkedList /> }/>
                <Route path="/DataStructure-and-Algorithm-Visualizer/binary-tree" element={<BinarySearchTree />}/>
                <Route path="/DataStructure-and-Algorithm-Visualizer/binary-heap" element={<BinaryHeap />}/>
                <Route path="/DataStructure-and-Algorithm-Visualizer/hash-map" element={<HashMap />}/>
                <Route path="/DataStructure-and-Algorithm-Visualizer/dijkstras" element={<Dijkstras />}/>
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
