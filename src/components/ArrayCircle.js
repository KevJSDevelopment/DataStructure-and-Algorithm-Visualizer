import React from 'react'

const ArrayCircle = (props) => {
    return (
        <div className={`w-${props.value}% bg-gray-500`}>
            {props.value}
        </div>
    )
}

export default ArrayCircle
