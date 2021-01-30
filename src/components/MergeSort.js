import React, { useState, useEffect } from 'react'
import ArrayBar from './ArrayBar';

const MergeSort = () => {

    const [testArray, setTestArray] = useState([])
    
    const resetArray = () => {
        const array = []
        for(let i = 0; i < randomInt(20, 40); i++){
            array.push(randomInt(20, 500))
        }
        setTestArray(array)
    }

    const randomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }


    // Need to change to more complicated merge sort
    const mergeSort = (array) => {
        // No need to sort the array if the array only has one element or empty
        if (array.length <= 1) {
            return array;
        }
        // In order to divide the array in half, we need to figure out the middle
        const middle = Math.floor(array.length / 2);
        // This is where we will be dividing the array into left and right
        const left = array.slice(0, middle);
        const right = array.slice(middle);
        // Using recursion to combine the left and right
        return merge(mergeSort(left), mergeSort(right));
    }

    const merge  = (leftArray, rightArray) => {
        let resultArray = [], index1 = 0, index2 = 0;
        // We will concatenate values into the resultArray in order

        while (index1 < leftArray.length && index2 < rightArray.length) {
            if (leftArray[index1] < rightArray[index2]) {
                resultArray.push(leftArray[index1]);
                index1++; // move leftArray cursor
            } else {
                resultArray.push(rightArray[index2]);
                index2++; // move rightArray cursor
            }
        }
        // We need to concat here because there will be one element remaining
        // from either left OR the right
        debugger
        return resultArray.concat(leftArray.slice(index1)).concat(rightArray.slice(index2));
    }

    useEffect(() => {
        resetArray()
    }, [])

    return (
        <div className="flex flex-row">
            {testArray.map((value, index) => {
                return <ArrayBar value={value} index={index} key={index}/>
            })}
            <button onClick={() => mergeSort(testArray)}>
                Run
            </button>
        </div>
    )
}

export default MergeSort
