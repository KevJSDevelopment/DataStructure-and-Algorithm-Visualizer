import React, { useState, useEffect } from 'react'
import HashBox from '../components/HashBox';
import { addToBox, addMessage } from '../helperMethods/HashMapAnimations';

class HashTable {

    constructor(size=6){
        const array = []
        for(let i = 0; i < size; i++){
            array.push(null)
        }
        this.keyMap = array
    }

    hash(key) {
        let total = 0;
        let primeNumber = 31;
        for (let i = 0; i < Math.min(key.length, 50); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * primeNumber + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value){
        const index = this.hash(key)

        if(!this.keyMap[index]){
            this.keyMap[index] = [[key,value]]
            addToBox(index, key, value)
        } else {
            this.keyMap[index].push([key,value])
            addToBox(index, key, value)
        }
    }

    get(key){
        const index = this.hash(key)
        let value
        if(!this.keyMap[index]) {
            return undefined
        }
        const box = document.getElementById(`box-${index}`)
        box.style.borderColor = "orange"

        if(this.keyMap[index].length >= 1) {
            value = this.getElement(index, key, 0, this.keyMap[index].length)
        }

        setTimeout(() => box.style.borderColor = "black", 5000)
        return value
    }

    getElement(index, key, i, length) {
        if(i < length){  
            const check = document.getElementById(`box-${index}-element-${i}`)
            check.style.border = "2px solid orange"
            check.style.backgroundColor = "white"
            if(this.keyMap[index][i][0] === key){
                check.style.borderColor = "green"
                setTimeout(() => {
                    check.style.border = ""
                    check.style.backgroundColor = this.keyMap[index][i][0]
                    addMessage(`The value found for key:${key} was ${this.keyMap[index][i][1]}`)
                }, 1000)
                return this.keyMap[index][i][1]
            }
            else {
                setTimeout(() => {
                    check.style.border = ""
                    check.style.backgroundColor = this.keyMap[index][i][0]
                    this.getElement(index, key, i + 1, length)
                }, 1000)
            }
        }
        else return undefined
    }
}

const HashMap = () => {
    const [hash, setHash] = useState(new HashTable())
    const [currentColor, setcurrentColor] = useState(['black', '#000000'])

    const x = 6 % 2
    const y = x ? 'one' : 'two'
    console.log(y)
    const handleSetHash = (event) => {
        event.preventDefault()
        const key = event.target[0].value
        const value = event.target[1].value
        if(key !== "" && value!== "") {
            setcurrentColor([key, value])
            hash.set(key, value)
        }
        else{
            alert("You must enter a color and hex color")
        }
    }

    const handleGetHash = (event) => {
        event.preventDefault()
        const key = event.target[0].value

        if(key !== ""){
            if(hash.get(key)){
                setcurrentColor([key, hash.get(key)])
            }
        }
    }

    return (
        <div className="w-full h-screen" >
            <div className="h-5/6">
                <div className="text-center shadow m-2 bg-white">
                    Hashmap Using Separate Chaining
                </div>
                <div className="text-center m-2 bg-white">
                    (enter any key, but best with colors)
                </div>
                <div id="hash-map-container" className="w-full h-4/6 p-2 flex flex-row">
                    [{hash.keyMap.map((element, index) => {
                        return <HashBox element={element} index={index} key={index}/>
                    })}]
                </div>
                <div id="message-board" className="h-1/4 m-2 w-full rounded-sm border-2 border-gray-200 overflow-auto"> 

                </div>
            </div>
            <div className="flex flex-row bg-gray-100 rounded m-2">
                <form className="m-2 w-4/6" onSubmit={(e) => handleSetHash(e)}>
                    <input className="m-2 w-1/3" type="text" placeholder="Enter a key, ex: red"/>
                    <input className="m-2 w-1/3" type="text" placeholder="Enter a value, ex: #FF0000"/>
                    <button className="bg-gray-300 hover:bg-white pl-2 pr-2 rounded m-6" type="submit">Set</button>
                </form>
                <form className="m-2" onSubmit={(e) => handleGetHash(e)}>
                    <input className="m-6" type="text" placeholder="Enter a key"/>
                    <button className="bg-gray-300 hover:bg-white pl-2 pr-2 rounded m-6" type="submit">Get</button>
                </form>
            </div>
        </div>
    )
}

export default HashMap
