import React, { useState } from 'react'
import { HeapNode } from '../helperMethods/DataStructureClasses';

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        console.log(value)
        this.values.push(value)
        this.bubbleUp(value)
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

    const [heap, setHeap] = useState(new MaxBinaryHeap())

    return (
        <div>
            <button onClick={() => heap.insert(Math.floor((Math.random() * 25)))}>insert rand num</button>
        </div>
    )
}

export default BinaryHeap
