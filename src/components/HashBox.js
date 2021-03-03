import React from 'react'

const HashBox = (props) => {

    return (
        <div className="block">
            <div className="text-center">
                {props.index}
            </div>
            <div className="border-2 m-1 p-2 border-black hover:bg-gray-300">
                {props.element ? props.element : "empty"}
            </div>
        </div>
    )
}

export default HashBox
