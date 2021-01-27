import React, {useState, useEffect} from 'react'
import ArrayCircle from './ArrayCircle'

const MultiplePointers = () => {

    const [testArray, setTestArray] = useState([])
    const [rows, setRows] = useState(1)

    const resetArray = () => {
        const array = []
        for(let i = 0; i < randomInt(10, 50); i++){
            array.push(randomInt(20, 75))
        }
        setTestArray(array)
        const rowNum = Math.floor(array.length / 5)
        setRows(rowNum)
    }

    const randomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const findSum = (arr, total = 100) => {
        let left = 0;
        let right = arr.length - 1;
        while(left < right) {
            let sum = arr[left] + arr[right]
            if(sum === total) {
                 console.log([arr[left], arr[right]])
                 return true
            } else if(sum > 0) {
                  right --;     
            } else {
                  left ++;       
            }
        }
        console.log("false")
        return false
    }

    useEffect(() => {
        resetArray()
    }, [])

    return (
        <div>
            <div className={`flex items-center h-64 grid grid-rows-${rows} grid-flow-col gap-8`}>
                {testArray.map((value, index) => {
                    return <ArrayCircle value={value} index={index} />
                })}
            </div>
            <button className="hover:bg-gray-200 rounded-xl p-1 float-right" onClick={() => findSum(testArray)}>
                Run
            </button>
        </div>
    )
}

export default MultiplePointers