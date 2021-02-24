import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className="h-screen w-32 text-center bg-black mb-6 p-4 shadow-xl">
            <button className="bg-gray-500 rounded-md hover:bg-gray-100">
                <Link to="/multiple-pointers">Multiple pointers</Link>
            </button>
            <button className="bg-gray-500 rounded-md hover:bg-gray-100">
                <Link to="/merge-sort">Merge Sort</Link>
            </button>
            <button className="bg-gray-500 rounded-md hover:bg-gray-100">
                <Link to="/quick-sort">Quick Sort</Link>
            </button>
            <button className="bg-gray-500 rounded-md hover:bg-gray-100">
                <Link to="/bubble-sort">Bubble Sort</Link>
            </button>
            <button className="bg-gray-500 rounded-md hover:bg-gray-100">
                <Link to="/linked-list">Singly Linked List</Link>
            </button>
        </div>
    )
}

export default Navbar
