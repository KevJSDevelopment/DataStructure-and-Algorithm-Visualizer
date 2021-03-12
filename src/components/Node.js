import React, { useState } from 'react';

import '../styles/node.css';

const Node = (props) => {
    
    const { node, mousePressed} = props
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

    return (
        <div id={`node-${node}`} className={"node ml-1 mb-1"} onMouseOver={(e) => onMouseEnter(e)}>

        </div>
    )
}

export default Node