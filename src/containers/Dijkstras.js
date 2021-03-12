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
    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }
    removeEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]) debugger
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v.node !== vertex2
        );
        if(!this.adjacencyList[vertex2]) debugger
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v.node !== vertex1
        );
    }
    Dijkstra(start, finish) {
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
        
        return this.checkNode(nodes, distances, previous, path, smallest, finish) 
    }

    highlightPath(node, index,  path) {
        if(index === path.length - 1){
            
            const nodeDiv = document.getElementById(`node-${node}`)
            nodeDiv.classList.add("node-path")
            return path
        }
        else{
            const nodeDiv = document.getElementById(`node-${node}`)
            nodeDiv.classList.add("node-path")
            setTimeout(() => this.highlightPath(path[index + 1], index + 1, path), 25)
        }
    }   

    checkNode(nodes, distances, previous, path, smallest, finish) { 
        // as long as there is something to visit
        if(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                const fullPath = path.concat(smallest).reverse();
                return this.highlightPath(fullPath[0], 0, fullPath)
            } 
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    const next = document.getElementById(`node-${nextNode.node}`)
                    if(!next.classList.contains("node-wall")) next.classList.add("node-visited")
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
        setTimeout(() => this.checkNode(nodes, distances, previous, path, smallest, finish), 25)
    }
}

const Dijkstras = () => {

    const [mousePressed, setMousePressed] = useState(false)
    const [nodes, setNodes] = useState([])
    const [graph, setGraph] = useState(new WeightedGraph())
    const [start, setStart] = useState(`row-${15}-col-${15}`)
    const [end, setEnd] = useState(`row-${15}-col-${30}`)
    const [numberOfColumns, setNumberOfColumns] = useState(0)
    const [numberOfRows, setNumberOfRows] = useState(0)

    const handleCreateGraph = () => {
        const container = document.getElementById("dijkstras-grid")
        const coordinates = container.getBoundingClientRect()
        let row = 0
        let col = 0
        let lastRowY = 25
        const array = []
        while(lastRowY < coordinates.bottom - 25){
            let lastNodeX = 25
            const innerArray = []
            
            while(lastNodeX < coordinates.right){
                const node = `row-${row}-col-${col}`
                graph.addVertex(node)
                if(row > 0){
                    graph.addEdge(node, `row-${row - 1}-col-${col}`, 1)
                }
                if(col > 0){
                    graph.addEdge(node, `row-${row}-col-${col - 1}`, 1)
                }
                innerArray.push(node)
                lastNodeX += 25
                col++
            }
            
            array.push(innerArray)
            if(row === 0) setNumberOfColumns(col)
            row++
            col = 0
            lastRowY += 31
        }
        setNumberOfRows(row)
        setNodes(array)
    }

    const handleMouseDown = () => {
        
        setMousePressed(true)
    }

    const handleMouseUp = () => {
        
        setMousePressed(false)
    }

    const handleSetStart = (row = 15, col =15) => {
        const oldNode = document.getElementById(`node-${start}`)
        oldNode.style.backgroundColor = "white"
        const node = document.getElementById(`node-row-${row}-col-${col}`)
        node.style.backgroundColor = "lightgreen"
        setStart(`row-${row}-col-${col}`)
    }

    const handleSetEnd = (row = 15, col = 30) => {
        const oldNode = document.getElementById(`node-${end}`)
        oldNode.style.backgroundColor = "white"
        const node = document.getElementById(`node-row-${row}-col-${col}`)
        node.style.backgroundColor = "magenta"
        setEnd(`row-${row}-col-${col}`)
    }

    const handleDijkstras = () => {
        let row = 0
        let col = 0
        
        while(row < numberOfRows){
            while(col < numberOfColumns){
                const node = `row-${row}-col-${col}`
                const nodeDiv = document.getElementById(`node-${node}`)
                if(col > 0){
                    if(nodeDiv.classList.contains("node-wall")){
                        graph.removeEdge(node, `row-${row}-col-${col-1}`)
                        graph.addEdge(node, `row-${row}-col-${col-1}`, 100)
                        
                    }
                    else {
                        graph.removeEdge(node, `row-${row}-col-${col-1}`)
                        graph.addEdge(node, `row-${row}-col-${col-1}`, 1)
                        
                    }
                }
                if(row > 0){
                    if(nodeDiv.classList.contains("node-wall")){
                        graph.removeEdge(node, `row-${row - 1}-col-${col}`)
                        graph.addEdge(node, `row-${row - 1}-col-${col}`, 100)
                        
                    }
                    else {
                        graph.removeEdge(node, `row-${row - 1}-col-${col}`)
                        graph.addEdge(node, `row-${row - 1}-col-${col}`, 1)
                        
                    }
                }
                col++
            }
            row++
            col = 0
        }
        graph.Dijkstra(start, end)
    }

    useEffect(async() => {
        await handleCreateGraph()
        handleSetStart()
        handleSetEnd()
    }, [])

    return (
        <div id="dijkstras-container" className="w-full h-full" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
            <div id="dijkstras-grid" className="w-5/6 h-5/6 m-12 ml-24 border-2 border-gray-300 p-2">
                {nodes.map((row, index) => {
                    return <NodeRow values={row} row={row[0].row} key={index} mousePressed={mousePressed} />
                })}
            </div>
            <div className="flex flex-row items-center">
                <form className="m-6 border-2" onSubmit={(event) => {
                    event.preventDefault();
                    handleSetStart(event.target[0].value, event.target[1].value, true)}}>
                    <label className="ml-2">Row: </label>
                    <input className="ml-2" type="number" placeholder="15" />
                    <label className="ml-2">Col: </label>
                    <input className="ml-2" type="number" placeholder="15" />
                    <button className="border-2 bg-gray-300 ml-2 hover:bg-gray-100 rounded" type="submit">
                        Set Start Point
                    </button>
                </form>
                <form className="m-6 border-2" onSubmit={(event) => {
                    event.preventDefault();
                    handleSetEnd(event.target[0].value, event.target[1].value, true)}}>
                    <label className="ml-2">Row: </label>
                    <input className="ml-2" type="number" placeholder="15" />
                    <label className="ml-2">Col: </label>
                    <input className="ml-2" type="number" placeholder="50" />
                    <button className="border-2 bg-gray-300 ml-2 hover:bg-gray-100 rounded" type="submit">
                        Set End Point
                    </button>
                </form>
                <button className="ml-2 h-1/2 border-2 bg-gray-300 hover:bg-gray-100 rounded" onClick={handleDijkstras}>
                    Start
                </button>
            </div>
        </div>
    )
}

export default Dijkstras
