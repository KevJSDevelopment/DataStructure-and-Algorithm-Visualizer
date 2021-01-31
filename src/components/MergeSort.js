import React, { useState, useEffect } from 'react'
import ArrayBar from './ArrayBar';
import {getMergeSortAnimations} from '../helperMethods/MergeSort'

const MergeSort = () => {

    const [testArray, setTestArray] = useState([])
    
    const resetArray = () => {
        const array = []
        for(let i = 0; i < randomInt(20, 100); i++){
            array.push(randomInt(20, 500))
        }
        setTestArray(array)
    }

    const randomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    // Change this value for the speed of the animations.
    const ANIMATION_SPEED_MS = 100;

    // This is the main color of the array bars.
    const PRIMARY_COLOR = 'turquoise';

    // This is the color of array bars that are being compared throughout the animations.
    const SECONDARY_COLOR = 'red';

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
        resetArray()
    }, [])

    return (
        <div className="flex flex-row">
            {testArray.map((value, index) => {
                return <ArrayBar value={value} index={index} key={index}/>
            })}
            <button onClick={() => mergeSort()}>
                Run
            </button>
        </div>
    )
}

export default MergeSort
