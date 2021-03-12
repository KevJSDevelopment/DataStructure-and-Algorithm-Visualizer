import React from 'react'
import Node from './Node'

const NodeRow = ({row, values, mousePressed}) => {
    return (
        <div className={`row-${row} flex flex-row`}>
            {values.map((node, index) => {
                return <Node node={node} key={index} mousePressed={mousePressed}/>
            })}
        </div>
    )
}

export default NodeRow
