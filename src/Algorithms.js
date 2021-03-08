import React from 'react'
import MultiplePointers from './containers/MultiplePointers'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MergeSort from './containers/MergeSort';
import QuickSort from './containers/QuickSort';
import BubbleSort from './containers/BubbleSort';
import LinkedList from './containers/SingleLinkedList';
import BinarySearchTree from './containers/BinaryTree';
import BinaryHeap from './containers/BinaryHeap';
import HashMap from './containers/HashMap';
import Dijkstras from './containers/Dijkstras';

const Algorithms = () => {
    
    return (
        <div className="w-screen">
            <Switch>
                <Route path="/DataStructure-and-Algorithm-Visualizer/multiple-pointers" exact render={() => <MultiplePointers /> }/> 
                <Route path="/DataStructure-and-Algorithm-Visualizer/merge-sort" exact render={() => <MergeSort /> }/> 
                <Route path="/DataStructure-and-Algorithm-Visualizer/quick-sort" exact render={() => <QuickSort /> }/> 
                <Route path="/DataStructure-and-Algorithm-Visualizer/bubble-sort" exact render={() => <BubbleSort /> }/> 
                <Route path="/DataStructure-and-Algorithm-Visualizer/linked-list" exact render={() => <LinkedList /> }/>
                <Route path="/DataStructure-and-Algorithm-Visualizer/binary-tree" exact render={() => <BinarySearchTree />}/>
                <Route path="/DataStructure-and-Algorithm-Visualizer/binary-heap" exact render={() => <BinaryHeap />}/>
                <Route path="/DataStructure-and-Algorithm-Visualizer/hash-map" exact render={() => <HashMap />}/>
                <Route path="/DataStructure-and-Algorithm-Visualizer/dijkstras" exact render={() => <Dijkstras />}/>
                <Redirect to="/DataStructure-and-Algorithm-Visualizer/merge-sort"/>
            </Switch>
        </div>
    )
}

export default Algorithms
