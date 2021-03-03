import React from 'react'

class HashTable {

    constructor(size=50){
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
    return (
        <div>
            
        </div>
    )
}

export default HashMap
