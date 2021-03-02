import React from 'react'
import MultiplePointers from '../components/MultiplePointers'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../components/Home';
import MergeSort from '../components/MergeSort';
import QuickSort from '../components/QuickSort';
import BubbleSort from '../components/BubbleSort';
import LinkedList from '../components/SingleLinkedList';
import BinarySearchTree from '../components/BinaryTree';

const Algorithms = () => {
    
    return (
        <div className="w-screen">
            <Switch>
                <Route path="/" exact render={() => <Home />}/>
                <Route path="/DataStructure-and-Algorithm-Visualizer" exact render={() => <Home /> }/>
                <Route path="/DataStructure-and-Algorithm-Visualizer/multiple-pointers" exact render={() => <MultiplePointers /> }/> 
                <Route path="/DataStructure-and-Algorithm-Visualizer/merge-sort" exact render={() => <MergeSort /> }/> 
                <Route path="/DataStructure-and-Algorithm-Visualizer/quick-sort" exact render={() => <QuickSort /> }/> 
                <Route path="/DataStructure-and-Algorithm-Visualizer/bubble-sort" exact render={() => <BubbleSort /> }/> 
                <Route path="/DataStructure-and-Algorithm-Visualizer/linked-list" exact render={() => <LinkedList /> }/>
                <Route path="/DataStructure-and-Algorithm-Visualizer/binary-tree" component={BinarySearchTree}/>
                <Redirect to="/DataStructure-and-Algorithm-Visualizer"/>
            </Switch>
        </div>
    )
}

export default Algorithms
