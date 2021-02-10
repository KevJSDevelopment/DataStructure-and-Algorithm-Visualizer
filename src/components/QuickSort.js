import React, { useEffect, useState } from 'react'
import {resetArray} from '../helperMethods/HelperMethods'
import ArrayBar from './ArrayBar'
// import { quickSort } from '../helperMethods/QuickSort'

const QuickSort = () => {

    const [testArray, setTestArray] = useState([])

    const swap = (items, leftIndex, rightIndex) => {
        let temp = items[leftIndex];
        let leftP = document.getElementById(`bar-${leftIndex}`)
        let rightP = document.getElementById(`bar-${rightIndex}`)
        
        leftP.style.height = `${items[rightIndex]}px`
        leftP.innerHTML = items[rightIndex]
    
        items[leftIndex] = items[rightIndex];

        leftP.style.height = `${temp}px`
        leftP.innerHTML = temp
        items[rightIndex] = temp;
    }
    
    const partition = (items, left, right) => {
        let pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right //right pointer

        let leftP = document.getElementById(`bar-${i}`)
        let rightP = document.getElementById(`bar-${j}`)

        leftP.style.backgroundColor = "red"
        rightP.style.backgroundColor = "skyblue"
    
        while (i <= j) {
            while (items[i] < pivot) {
                i++;
            }
            while (items[j] > pivot) {
                j--;
            }
            if (i <= j) {
                setTimeout(() => swap(items, i, j), 20); //swapping two elements
                i++;
                j--;
            }
        }
        return i;
    }
    
    const quickSort = (items, left, right) => {
        let index;
        if (items.length > 1) {
            index = partition(items, left, right); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                setTimeout(() => quickSort(items, left, index - 1), 100);
            }
            if (index < right) { //more elements on the right side of the pivot
                setTimeout(() => quickSort(items, index, right), 100);
            }
        }
        return items;
    }

    useEffect(() => {
        setTestArray(resetArray())
    }, [])

    return (
        <div className="flex flex-row">
            {testArray.map((value, index) => {
                return <ArrayBar value={value} index={index} key={index}/>
            })}
            <button onClick={() => quickSort(testArray, 0, testArray.length - 1)}>
                Run
            </button>
        </div>
    )
}

export default QuickSort
