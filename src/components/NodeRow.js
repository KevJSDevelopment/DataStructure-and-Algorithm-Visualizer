import React from 'react'
import Node from './Node'

const NodeRow = (props) => {
    return (
        <div className={`row-${props.row} flex flex-row`}>
            {props.row === 0 ? props.values.map((node, index) => {
                return <div style={{width: "25px", height: "25px"}} key={index}> {node.col > 0 ? node.col : null} </div>
            }) :
            props.values.map((node, index) => {
                return <Node row={node.row} col={node.col} index={index} key={index} mousePressed={props.mousePressed}/>
            })}
        </div>
    )
}

export default NodeRow
