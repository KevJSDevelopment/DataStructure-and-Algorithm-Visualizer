import React from 'react'
// import { HeapNode } from '../helperMethods/DataStructureClasses';

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value)
        this.bubbleUp()
    }

    extractMax() {
       const max = this.values[0]
       const end = this.values.pop()
       if(this.values.length > 0){
           this.values[0] = end
           this.bubbleDown()
       }
       return max
    }

    bubbleDown() {

        let index = 0
        const length = this.values.length
        const element = this.values[index]

        while(index < this.values.length - 1){
            let child1Idx = (2*index) + 1
            let child2Idx = (2*index) + 2
            let child1, child2
            let swap = null

            if(child1Idx < length){
                child1 = this.values[child1Idx]
                if(child1 > element){
                    swap = child1Idx
                }
            }

            if(child2Idx < length){
                child2 = this.values[child2Idx]
                if(!swap && child2 > element){
                    swap = child2Idx
                }
                if(swap && child2 > child1){
                    swap = child2Idx
                }
            }

            if(!swap) break
            this.values[index] = this.values[swap]
            this.values[swap] = element
            index = swap
        }
    }

    bubbleUp(){
        
        let index = this.values.length - 1
        const value = this.values[index]
        
        while(index > 0){
            let parentIndex = Math.floor(((index - 1)/2))
            let parent = this.values[parentIndex]
            if(value <= parent) break;
            this.values[parentIndex] = value
            this.values[index] = parent
            index = parentIndex
        }
    }
}


const BinaryHeap = () => {

    const heap = new MaxBinaryHeap()

    return (
        <div id="binary-heap-page" className="h-screen w-screen">
            <div>Currently being worked on</div>
            <canvas id="heap-canvas" className="mt-2 ml-2 border-gray-200 border-2" width={window.innerWidth * .9} height={window.innerHeight * .9} >
            
            </canvas>
            <button className="border-2 rounded bg-gray-300 m-2 hover:bg-gray-100 border-gray-500" onClick={() => heap.insert(Math.floor((Math.random() * 25)))}>Insert Number</button>
            <button className="border-2 rounded bg-gray-300 m-2 hover:bg-gray-100 border-gray-500" onClick={() => {
                console.log(heap.values)
                console.log(heap.extractMax())
                }}>Extract</button>
        </div>
    )
}

export default BinaryHeap
