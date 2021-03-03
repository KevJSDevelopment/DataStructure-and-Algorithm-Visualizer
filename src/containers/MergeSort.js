import React, { useState, useEffect } from 'react'
import ArrayBar from '../components/ArrayBar';
import {getMergeSortAnimations} from '../helperMethods/MergeSort'
import {resetArray} from '../helperMethods/HelperMethods'

const MergeSort = () => {

    const [testArray, setTestArray] = useState([])

    // Change this value for the speed of the animations.
    const ANIMATION_SPEED_MS = 20;

    // This is the main color of the array bars.
    const PRIMARY_COLOR = "rgb(107, 114, 128)";

    // This is the color of array bars that are being compared throughout the animations.
    const SECONDARY_COLOR = "whitesmoke";

    // Need to change to more complicated merge sort
    const mergeSort = () => {
        const animations = getMergeSortAnimations(testArray);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar')
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx];
              barOneStyle.style.height = `${newHeight}px`;
              barOneStyle.innerHTML = `${newHeight}`
            }, i * ANIMATION_SPEED_MS);
          }
        }
      }

    useEffect(() => {
        setTestArray(resetArray())
    }, [])

    return (
      <div>
        <div className="flex flex-row">
            {testArray.map((value, index) => {
                return <ArrayBar value={value} index={index} key={index}/>
            })}
        </div>
        <button className="m-6 bg-gray-300 rounded hover:bg-gray-100 pl-2 pr-2" onClick={() => mergeSort()}>
            Run Merge Sort
        </button>
      </div>
    )
}

export default MergeSort
