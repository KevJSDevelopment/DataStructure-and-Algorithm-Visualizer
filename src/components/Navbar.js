import React, { useState } from 'react'

const Navbar = () => {

    return (
        <div className={`h-screen items-center shadow-xl w-64`}>
            <svg className="w-8 h-8 rounded-md hover:bg-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </div>
    )
}

export default Navbar
