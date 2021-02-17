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
        let prev = this.head
        while(prev.next !== this.tail){
            prev = prev.next
        }
        this.tail = prev
        this.tail.next = null
        this.length--
        return this;
    }
}

class DoublyLinkedList {

}

const LinkedList = () => {

    const [list, setList] = useState(new SinglyLinkedList())
    const [last, setLast] = useState(list.head)

    const addToList = () => {
        const value = last + 1
        setLast(value)
        const container = document.querySelector("#node-container")
        const div = document.createElement("div")
        div.className = "single-node"
        div.innerHTML = value
        container.append(div)
        list.push(value)
    }

    useEffect(() => {
        list.head = 0
    }, [])

    return (
        <div>
            <div id="node-container" className="flex flex-row">

            </div>
            <button onClick={() => addToList()}> Add 1 to list</button>
        </div>
    )
}

export default LinkedList
