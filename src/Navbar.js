import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className="h-screen text-center bg-white mb-6 p-4 shadow-xl">
            <div id="sorting-algo-container" className="mb-12">
                <div className="border-gray-100 w-full rounded-sm border-2 mb-2 shadow-xl">
                    Sorting Algorithms
                </div>
                <button className="bg-white w-full mb-2 rounded-md hover:bg-gray-100">
                    <Link to="/DataStructure-and-Algorithm-Visualizer/merge-sort">Merge Sort</Link>
                </button>
                <button className="bg-white w-full mb-2 rounded-md hover:bg-gray-100">
                    <Link to="/DataStructure-and-Algorithm-Visualizer/quick-sort">Quick Sort</Link>
                </button>
                <button className="bg-white w-full mb-2 rounded-md hover:bg-gray-100">
                    <Link to="/DataStructure-and-Algorithm-Visualizer/bubble-sort">Bubble Sort</Link>
                </button>
            </div>
            <div id="data-structures-container" className="mb-12">
                <div className="border-gray-100 w-full rounded-sm border-2 mb-2  shadow-xl">
                    Data Structures     
                </div>
                <button className="bg-white w-full mb-2 rounded-md hover:bg-gray-100">
                    <Link to="/DataStructure-and-Algorithm-Visualizer/linked-list">Singly Linked List</Link>
                </button>
                <button className="bg-white w-full mb-2 rounded-md hover:bg-gray-100">
                    <Link to="/DataStructure-and-Algorithm-Visualizer/binary-tree">Binary Tree</Link>
                </button>
                <button className="bg-white w-full mb-2 rounded-md hover:bg-gray-100">
                    <Link to="/DataStructure-and-Algorithm-Visualizer/binary-heap">Binary Heap</Link>
                </button>
                <button className="bg-white w-full mb-2 rounded-md hover:bg-gray-100">
                    <Link to="/DataStructure-and-Algorithm-Visualizer/hash-map">Hash Map</Link>
                </button>
            </div>
            <div id="path-finding-container" className="mb-12">
                <div className="border-gray-100 w-full rounded-sm border-2 mb-2  shadow-xl">
                    Pathfinding Algorithms
                </div>
            </div>
            <div id="path-finding-container" className="mb-12">
                <div className="border-gray-100 w-full rounded-sm border-2 mb-2  shadow-xl">
                    Other
                </div>
                <button className="bg-white w-full rounded-md hover:bg-gray-100">
                    <Link to="/DataStructure-and-Algorithm-Visualizer/multiple-pointers">Multiple pointers</Link>
                </button>
            </div>
        </div>
    )
}

export default Navbar
