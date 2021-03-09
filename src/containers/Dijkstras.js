import React, { useEffect, useState } from 'react'
import { PriorityQueue } from '../helperMethods/DataStructureClasses'
import NodeRow from '../components/NodeRow';

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2, weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
    Dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [] //to return at end
        let smallest;
        //build up initial state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            } 
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        console.log(path.concat(smallest).reverse());
        return path.concat(smallest).reverse();     
    }
}

const Dijkstras = () => {

    const [mousePressed, setMousePressed] = useState(false)
    const [nodes, setNodes] = useState([])

    const handleCreateGraph = () => {
        const graph = new WeightedGraph()
        
        const container = document.getElementById("dijkstras-grid")
        const coordinates = container.getBoundingClientRect()
        let row = 0
        let col = 0
        let lastRowY = 25
        const array = []
        while(lastRowY < coordinates.bottom){
            let lastNodeX = 25
            const innerArray = []
            
            while(lastNodeX < coordinates.right){
                innerArray.push({row: row, col: col})
                lastNodeX += 25
                col++
            }

            array.push(innerArray)
            row++
            lastRowY += 31
        }

        setNodes(array)
    }

    const handleMouseDown = () => {
        // debugger
        setMousePressed(true)
    }

    const handleMouseUp = () => {
        // debugger
        setMousePressed(false)
    }
    useEffect(() => {
        handleCreateGraph()
    }, [])

    return (
        <div id="dijkstras-container" className="w-full h-full" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
            <div id="dijkstras-grid" className="w-5/6 h-5/6 m-12 ml-24 border-2 border-gray-300 p-2">
                {nodes.map(row => {
                    return <NodeRow values={row} row={row[0].row} mousePressed={mousePressed} />
                })}
            </div>
            <button onClick={() => handleCreateGraph()}>
                Create Graph
            </button>
        </div>
    )
}

export default Dijkstras
