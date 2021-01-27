import React from 'react'

const ArrayCircle = (props) => {
    return (
        <div className="...">
            <div className="bg-gray-500 rounded-full" style={{width: `${props.value}px`, height: `${props.value}px`}}>
                {props.value}
            </div>
        </div>
    )
}

export default ArrayCircle
