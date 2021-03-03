import React, { useState } from 'react'

class HashTable {

    constructor(size=20){
        this.keyMap = new Array(size);
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
            this.keyMap[index] = [value]
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
    const [hash, setHash] = useState(new HashTable(20))

    return (
        <div className="w-full h-screen" >
            <div id="hash-map-container" className="w-full h-5/6">
                {hash.map(index => {
                    return <HashBox />
                })}
            </div>
            <div className="flex flex-row bg-gray-100 rounded m-2">
                <form className="m-2">
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
