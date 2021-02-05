import React, { useEffect, useState } from 'react'
import {resetArray} from '../helperMethods/HelperMethods'

const QuickSort = () => {

    const [testArray, setTestArray] = useState([])

    useEffect(() => {
        setTestArray(resetArray())
        return () => {
            
        }
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

export default QuickSort
