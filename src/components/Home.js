import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            Homepage
            <button className="bg-gray-500 rounded-md ml-6 hover:bg-gray-300">
                <Link to="/multiple-pointers">Multiple pointers</Link>
            </button>
        </div>
    )
}

export default Home
