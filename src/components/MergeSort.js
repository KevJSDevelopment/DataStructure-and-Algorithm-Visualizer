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
        return merge(
            mergeSort(left), mergeSort(right)
        );
    }

    const merge  = (left, right) => {
        let resultArray = [], leftIndex = 0, rightIndex = 0;
      
        // We will concatenate values into the resultArray in order
        while (leftIndex < left.length && rightIndex < right.length) {
          if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // move left array cursor
          } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // move right array cursor
          }
        }
      
        // We need to concat here because there will be one element remaining
        // from either left OR the right
        return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }

    useEffect(() => {
        resetArray()
    }, [])

    return (
        <div className="flex flex-row">
            {testArray.map((value, index) => {
                return <ArrayBar value={value} index={index}/>
            })}
        </div>
    )
}

export default MergeSort
