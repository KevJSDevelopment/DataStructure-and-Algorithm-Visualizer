import React, {useState, useEffect} from 'react'
import ArrayCircle from './ArrayCircle'
import Navbar from '../containers/Navbar'

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

    const findSum = (left = 0, right = testArray.length - 1, total = 100, oldTarget1 = null, oldTarget2 = null) => {
        
        if(left >= testArray.length - 1){
            return false
        }

        let sum = testArray[left] + testArray[right]

        if(oldTarget1 !== null){
            oldTarget1.style.backgroundColor = "rgb(107, 114, 128)"
        }
        if(oldTarget2 !== null){
            oldTarget2.style.backgroundColor = "rgb(107, 114, 128)"
        }

        const target1 = document.getElementById(`circle-${left}`)
        const target2 = document.getElementById(`circle-${right}`)

        target1.style.backgroundColor = "whitesmoke"
        target2.style.backgroundColor = "whitesmoke"

        if(sum === total) {
            const answer1 = document.getElementById(`circle-${left}`)
            const answer2 = document.getElementById(`circle-${right}`)

            answer1.style.backgroundColor = "green"
            answer2.style.backgroundColor = "green"
            return true
        } else if(right <= left + 1){
            setTimeout(() => findSum(left + 1, testArray.length - 1, total, target1, target2), 100)
        } else{
            setTimeout(() => findSum(left, right - 1, total, target1, target2), 100)       
        }
    }

    useEffect(() => {
        resetArray()
    }, [])

    return (
        <div>
            <div className={`flex items-center h-64 grid grid-cols-${rows} grid-flow-row gap-8`}>
                {testArray.map((value, index) => {
                    return <ArrayCircle value={value} index={index} />
                })}
            </div>
            <button className="hover:bg-gray-200 rounded-xl p-1 float-right" onClick={() => findSum()}>
                Run
            </button>
        </div>
    )
}

export default MultiplePointers
