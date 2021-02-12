import React, { useEffect, useState } from 'react'
import {resetArray} from '../helperMethods/HelperMethods'
import ArrayBar from './ArrayBar'
// import { quickSort } from '../helperMethods/QuickSort'

const QuickSort = () => {

    const [testArray, setTestArray] = useState([])

    const swap = (items, leftIndex, rightIndex) => {
        const leftP = document.getElementById(`bar-${leftIndex}`)
        const rightP = document.getElementById(`bar-${rightIndex}`)
        console.log(leftP, rightP)
        let temp = items[leftIndex];
        
        leftP.style.height = `${items[rightIndex]}px`
        leftP.innerHTML = items[rightIndex]
    
        items[leftIndex] = items[rightIndex];
        rightP.style.height = `${temp}px`
        rightP.innerHTML = temp
        items[rightIndex] = temp;
    }
    
    const partition = (items, left, right) => {
        let pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right //right pointer
    
        while (i <= j) {
            while (items[i] < pivot) {
                i++
            }
            while (items[j] > pivot) {
                j--
            }
            if (i <= j) {
                swap(items, i, j)//swapping two elements
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
                setTimeout(() => {
                    quickSort(items, left, index - 1)
                }, 200)
            }
            if (index < right) { //more elements on the right side of the pivot
                setTimeout(() => {
                    quickSort(items, index, right)
                }, 200)
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
