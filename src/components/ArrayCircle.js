import React from 'react'

const ArrayCircle = (props) => {
    return (
        <div className="...">
            <div className="bg-gray-500 rounded-full mx-auto" style={{width: `${props.value}px`, height: `${props.value}px`, textAlign: "center"}}>
                {props.value}
            </div>
        </div>
    )
}

export default ArrayCircle
