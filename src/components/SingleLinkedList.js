import React, { useState, useEffect } from 'react'

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this;
    }
    pop(){
        if(!this.head){
            return undefined
        }

        let current = this.head
        let newTail = current
        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current;

    }
}

class DoublyLinkedList {

}

const LinkedList = () => {

    const [list, setList] = useState(new SinglyLinkedList())
    const [last, setLast] = useState(0)

    
    const addToList = () => {
        const value = last + 1
        const container = document.querySelector("#node-container")
        if(list.length > 0){
            const oldTail = document.getElementById("div-tail")
            oldTail.id = `node-${list.tail.value}`
            if(list.length > 1){
                const lastSpacer = document.getElementById("last-spacer")
                lastSpacer.id = `spacer-${list.length - 1}`
            }
        }
        const div = document.createElement("div")
        const spacer = document.createElement("div")
        spacer.innerHTML = "-->"
        spacer.style.textAlign = "center"
        spacer.style.marginTop = "1%"
        spacer.style.marginLeft = "1%"
        spacer.id = "last-spacer"
        div.style.marginLeft = "1%"
        div.style.borderRadius = "50%"
        div.style.padding = "1%"
        div.style.border = '2px solid darkgray'
        div.innerHTML = value
        div.id = "div-tail"
        if(list.head){
            container.append(spacer)
        }
        container.append(div)
        list.push(value)
        setLast(value)
        
    }

    const removeFromList = () => {
        const container = document.querySelector("#node-container")
        list.pop()
        (prevState => prevState - 1)
        if(list.length > 0){
            const oldTail = document.getElementById("div-tail")
            const newTail = document.getElementById(`node-${list.tail.value}`)
            newTail.id = "div-tail"
            container.removeChild(oldTail)
        }
        if(list.length> 1){
            const lastSpacer = document.getElementById("last-spacer")
            const newSpacerEnd = document.getElementById(`spacer-${list.length - 1}`)
            // debugger
            newSpacerEnd.id = "last-spacer"
            container.removeChild(lastSpacer)
        }
    }

    useEffect(() => {
        list.head = 0
    }, [])

    return (
        <div>
            <div id="node-container" className="flex flex-row">

            </div>
            <button onClick={() => addToList()}> Add 1 to list</button>
            <button onClick={() => removeFromList()}> Remove 1 from list</button>
        </div>
    )
}

export default LinkedList
