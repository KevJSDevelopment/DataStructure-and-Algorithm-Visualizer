import React from 'react'

const Pathfinding = () => {
    return (
        <div>
            <button className="bg-gray-500 rounded-md ml-6 hover:bg-gray-300">
                <Link to="/multiple-pointers">Multiple pointers</Link>
            </button>
            <button className="bg-gray-500 rounded-md ml-6 hover:bg-gray-300">
                <Link to="/merge-sort">Merge Sort</Link>
            </button>
            <button className="bg-gray-500 rounded-md ml-6 hover:bg-gray-300">
                <Link to="/quick-sort">Quick Sort</Link>
            </button>
            <button className="bg-gray-500 rounded-md ml-6 hover:bg-gray-300">
                <Link to="/bubble-sort">Bubble Sort</Link>
            </button>
        </div>
    )
}

export default Pathfinding
