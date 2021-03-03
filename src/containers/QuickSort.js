import React, { useEffect, useState } from 'react'
import {resetArray} from '../helperMethods/HelperMethods'
import ArrayBar from '../components/ArrayBar'
// import { quickSort } from '../helperMethods/QuickSort'

const QuickSort = () => {

    const [values, setValues] = useState([])
    const ANIMATION_SPEED = 100
    async function quickSort(arr, start, end) {
        if (start >= end) {
            return;
        }
        let index = await partition(arr, start, end);
        document.getElementById(`bar-${index}`).style.backgroundColor = "#D1D5DB"
        
        await Promise.all([
            quickSort(arr, start, index - 1),
            quickSort(arr, index + 1, end)
        ]);
    }
    
    async function partition(arr, start, end) {
        for (let i = start; i <= end; i++) {
            document.getElementById(`bar-${i}`).style.backgroundColor = "#D6FFB7"
        }
        
        let pivotValue = arr[end];
        let pivotIndex = start;
        document.getElementById(`bar-${pivotIndex}`).style.backgroundColor = "#E0777D"
        for (let i = start; i < end; i++) {
            if (arr[i] < pivotValue) {
            await swap(arr, i, pivotIndex);
            document.getElementById(`bar-${pivotIndex}`).style.backgroundColor = "#D1D5DB"
            pivotIndex++;
            document.getElementById(`bar-${pivotIndex}`).style.backgroundColor = "#E0777D"
            }
        }
        await swap(arr, pivotIndex, end);
        
        for (let i = start; i < end; i++) {
            if (i != pivotIndex) {
                document.getElementById(`bar-${i}`).style.backgroundColor = "#D1D5DB"
            }
        }
        
        return pivotIndex;
    }
    
    async function swap(arr, a, b) {
        await sleep(ANIMATION_SPEED);
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
        const element1 = document.getElementById(`bar-${a}`)
        element1.style.height = `${arr[a]}px`
        element1.innerHTML = arr[a]

        const element2 = document.getElementById(`bar-${b}`)
        element2.style.height = `${arr[b]}px`
        element2.innerHTML = arr[b]
    }
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        setValues(resetArray())
    }, [])

    return (
        <div>
            <div className="flex flex-row">
                {values.map((value, index) => {
                    return <ArrayBar value={value} index={index} key={index}/>
                })}
            </div>
            <button className="m-6 bg-gray-300 rounded hover:bg-gray-100 pl-2 pr-2"  onClick={() => quickSort(values, 0, values.length - 1)}>
                Run Quick Sort
            </button>
        </div>
    )
}

export default QuickSort
