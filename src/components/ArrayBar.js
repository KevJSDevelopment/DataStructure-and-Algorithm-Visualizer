import React from 'react'

const ArrayBar = (props) => {
    return (
        <div id={`bar-${props.index}`} className={`array-bar w-full min-w-0 my-6 mx-1 bg-red-100`} style={{height: `${props.value}px`}}>
            {props.value}
        </div>
    )
}

export default ArrayBar
