import React, { useState } from 'react';

import '../styles/node.css';

const Node = (props) => {
    
    const { col, row, mousePressed } = props

    const [start, setStart] = useState(false)
    const [end, setEnd] = useState(false)
    const [wall, setWall] = useState(false)

    const onMouseEnter = (event) => {

        if(!mousePressed) return;

        if(wall){
            event.target.classList.remove("node-wall")
            setWall(false)
        }
        else{
            event.target.classList.add("node-wall")
            setWall(true)
        }
    }

    if(col === 0) return <div className="column-number">{row > 0 ? row : null}</div>;
    else return <div id={`node-${row}-${col}`} className={"node ml-1 mb-1"} onMouseOver={(e) => onMouseEnter(e)}></div>;
}

export default Node