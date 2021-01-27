import React, {useState, useEffect} from 'react'
import ArrayCircle from './ArrayCircle'

const MultiplePointers = () => {

    const [testArray, setTestArray] = useState([])
    const [rows, setRows] = useState(1)

    const resetArray = () => {
        const array = []
        for(let i = 0; i < randomInt(10, 50); i++){
            array.push(randomInt(10, 99))
        }
        setTestArray(array)
        const rowNum = Math.floor(array.length / 5)
        setRows(rowNum)
    }

    const randomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const sumZero = (arr) => {
        let left = 0;
        let right = arr.length - 1;
        while(left < right) {
            let sum = arr[left] + arr[right]
            if(sum === 0) {
                return [arr[left], arr[right]]
            } else if(sum > 0) {
                  right --;     
            } else {
                  left ++;       
            }
        }
        return false
    }

    useEffect(() => {
        resetArray()
    }, [])

    return (
        <div className={`h-64 grid grid-rows-${rows} grid-flow-col gap-4 items-center`}>
            {testArray.map((value, index) => {
                return <ArrayCircle value={value} index={index} />
            })}
        </div>
    )
}

export default MultiplePointers
