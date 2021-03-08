import React, { useEffect } from 'react'
import { PriorityQueue } from '../helperMethods/DataStructureClasses'
import  Node  from '../components/Node';
import { render } from 'react-dom';

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

    const onMouseDown = () => {

    }

    const onMouseEnter = () => {

    }

    const onMouseUp = () => {

    }

    const handleCreateGraph = () => {
        const graph = new WeightedGraph()
        
        const container = document.getElementById("dijkstras-grid")
        const coordinates = container.getBoundingClientRect()
        let row = 0
        let col = 0
        let lastRowY = 25
        while(lastRowY < coordinates.bottom){
            let lastNodeX = 25
            const nodeRow = document.createElement("div")
            nodeRow.className = `row-${row} flex flex-row`
            
            while(lastNodeX < coordinates.right){
                const div = document.createElement("div")
                render(<Node col={col} isFinish={false} isStart={false} isWall={false} row={row} onMouseDown={onMouseDown} onMouseEnter={onMouseEnter} onMouseUp={onMouseUp}/>, div)
                nodeRow.append(div)
                lastNodeX += 25
                col++
            }

            container.append(nodeRow)
            row++
            lastRowY += 25
        }
    }

    useEffect(() => {
        handleCreateGraph()
    }, [])

    return (
        <div id="dijkstras-container" className="block w-full h-full">
            <div id="dijkstras-grid" className="w-5/6 h-5/6">

            </div>
            <button onClick={() => handleCreateGraph()}>
                Create Graph
            </button>
        </div>
    )
}

export default Dijkstras
