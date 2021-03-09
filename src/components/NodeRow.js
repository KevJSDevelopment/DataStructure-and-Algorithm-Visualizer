import React from 'react'
import Node from './Node'

const NodeRow = (props) => {
    return (
        <div className={`row-${props.row} flex flex-row ml-12`}>
            {props.values.map(node => {
                return <Node row={node.row} col={node.col} mousePressed={props.mousePressed}/>
            })}
        </div>
    )
}

export default NodeRow
