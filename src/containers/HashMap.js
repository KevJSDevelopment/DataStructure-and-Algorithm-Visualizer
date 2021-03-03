import React, { useState, useEffect } from 'react'
import HashBox from '../components/HashBox';

class HashTable {

    constructor(size=15){
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
        } else {
            this.keyMap[index].push([key,value])
        }
    }

    get(key){
        const index = this.hash(key)

        if(!this.keyMap[index]) return undefined

        if(this.keyMap[index].length >= 1) {
            for(let i = 0; i < this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1]
                }
            }
        }

        return undefined
    }
}

const HashMap = () => {
    const [hash, setHash] = useState(new HashTable())
    const [currentColor, setcurrentColor] = useState(['black', '#000000'])

    const handleSetHash = (event) => {
        event.preventDefault()

        if(event.target[0].value !== "" && event.target[1].value !== "") {
            hash.set(event.target[0].value, event.target[1].value)
        }
        else{
            alert("You must enter a color and hex color")
        }
    }

    return (
        <div className="w-full h-screen" >
            <div className="h-5/6">
                <div id="hash-map-container" className="w-full p-2 flex flex-row">
                    {hash.keyMap.map((element, index) => {
                        return <HashBox element={element} index={index} key={index}/>
                    })}
                </div>
                <div className="flex flex-row">
                    <div className="m-6 p-2">Selected Color: </div>
                    <div className="m-6 p-2 rounded w-4/6 text-white" style={{backgroundColor: currentColor[0]}}> {currentColor[0]} : {currentColor[1]} </div>
                </div>
            </div>
            <div className="flex flex-row bg-gray-100 rounded m-2">
                <form className="m-2" onSubmit={(e) => handleSetHash(e)}>
                    <input className="m-6" type="text" placeholder="Enter a color"/>
                    <input className="m-6" type="text" placeholder="Hexadecimal for color"/>
                    <button className="bg-gray-300 hover:bg-white pl-2 pr-2 rounded m-6" type="submit">Set</button>
                </form>
                <form className="m-2">
                    <input className="m-6" type="text" placeholder="Enter a color"/>
                    <button className="bg-gray-300 hover:bg-white pl-2 pr-2 rounded m-6" type="submit">Get</button>
                </form>
            </div>
        </div>
    )
}

export default HashMap
