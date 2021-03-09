import React, { useState } from 'react';

import '../styles/node.css';

const Node = (props) => {
    
    const { col, row, onMouseDown, onMouseUp, mouseDown} = props

    const [start, setStart] = useState(false)
    const [end, setEnd] = useState(false)
    const [wall, setWall] = useState(false)

    const onMouseEnter = (event) => {
        if(wall){
            event.target.className = "node "
            setWall(false)
        }
        else{
            event.target.className = "node node-wall"
            setWall(true)
        }
    }


    return (
        <div
        id={`node-${row}-${col}`}
        className="node"
        onMouseDown={() => onMouseDown()}
        onMouseEnter={(e) => onMouseEnter(e)}
        onMouseUp={() => onMouseUp()}>
        </div>
    )
}

export default Node