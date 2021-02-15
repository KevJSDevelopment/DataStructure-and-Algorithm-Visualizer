import React, { useState, useEffect } from 'react'
import ArrayBar from './ArrayBar'
import { resetArray } from '../helperMethods/HelperMethods'

const BubbleSort = () => {

    const [values, setValues] = useState([])

    const bubbleSort = async () => {
        
        for(let i = 0; i < values.length; i++){
            for(let j = 0; j < values.length; j++ ){
                document.getElementById(`bar-${i}`).style.backgroundColor = "#D1D5DB"
                document.getElementById(`bar-${j}`).style.backgroundColor = "#D1D5DB"
                if(values[i] < values[j]){
                    document.getElementById(`bar-${i}`).style.backgroundColor = "#E0777D"
                    document.getElementById(`bar-${j}`).style.backgroundColor = "#E0777D"
                    await swap(values, i, j)
                }
            }
        }
    }

    async function swap(arr, a, b) {
        await sleep(100);
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
        <div className="flex flex-row">
            {values.map((value, index) => {
                return <ArrayBar key={index} value={value} index={index} />
            })}
            <button onClick={() => bubbleSort()}>
                Run
            </button>
        </div>
    )
}

export default BubbleSort
