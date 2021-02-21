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
    shift() {
        if(!this.head){
            return undefined
        }

        let oldHead = this.head
        this.head = oldHead.next
        this.length--

        return oldHead
    }
    unshift() {
        
    }
}

class DoublyLinkedList {

}

const LinkedList = () => {

    const [list, setList] = useState(new SinglyLinkedList())
    const [last, setLast] = useState(0)
    
    const push = () => {
        const container = document.querySelector("#node-container")
        const value = last + 1
        if(list.length === 0){
            const div = document.createElement("div")
            div.style.marginLeft = "1%"
            div.style.borderRadius = "50%"
            div.style.padding = "1%"
            div.style.border = '2px solid blue'
            div.innerHTML = value
            div.id = "node-head"
            container.append(div)
        } else {
            if(list.length > 1){
                const oldTail = document.getElementById("node-tail")
                oldTail.id = `node-${list.tail.value}`
                oldTail.style.borderColor = "darkgray"
                const lastSpacer = document.getElementById("last-spacer")
                lastSpacer.id = `spacer-${list.length - 1}`
            }
            const spacer = document.createElement("div")
            spacer.innerHTML = "-->"
            spacer.style.textAlign = "center"
            spacer.style.marginTop = "1%"
            spacer.style.marginLeft = "1%"
            spacer.id = "last-spacer"
            
            const div = document.createElement("div")
            div.style.marginLeft = "1%"
            div.style.borderRadius = "50%"
            div.style.padding = "1%"
            div.style.border = '2px solid lightgreen'
            div.innerHTML = value
            div.id = "node-tail"

            container.append(spacer)
            container.append(div)
        }
        list.push(value)
        setLast(value)
        
    }

    const pop = () => {
        const container = document.querySelector("#node-container")
        if(list.length === 0) {
            return
        }

        const value = last - 1
        list.pop()

        if(list.length === 0){
            const head = document.getElementById("node-head")
            container.removeChild(head)
        }
        else {
            const oldTail = document.getElementById("node-tail")
            container.removeChild(oldTail)

            const oldLastSpacer = document.getElementById("last-spacer")
            container.removeChild(oldLastSpacer)

            if(list.length !== 1){
                const newTail = document.getElementById(`node-${list.tail.value}`)
                newTail.id = "node-tail"
                newTail.style.borderColor = "lightgreen"
    
                const newLastSpacer = document.getElementById(`spacer-${list.length - 1}`)
                newLastSpacer.id = "last-spacer"
            }
        }
        setLast(value)
        
    }

    const shift = () => {
        if(list.length <= 0) return;
        const container = document.querySelector("#node-container")
        const oldHead = document.getElementById("node-head")
        container.removeChild(oldHead)
        if(list.length > 2){
            const newHead = document.getElementById(`node-${list.head.next.value}`)
            newHead.style.borderColor = "blue"
            newHead.id = "node-head"
            const oldSpacer = document.getElementById(`spacer-${list.head.value}`)
            container.removeChild(oldSpacer)
        }
        else if(list.length === 2){
            const newHead = document.getElementById(`node-tail`)
            newHead.style.borderColor = "blue"
            newHead.id = "node-head"
            const oldSpacer = document.getElementById(`last-spacer`)
            container.removeChild(oldSpacer)
        }
        const value = last - 1
        setLast(value)
        list.shift()
    }

    const unshift = () => {

    }

    useEffect(() => {
        list.head = 0
    }, [])

    return (
        <div>
            <div id="node-container" className="flex flex-row">

            </div>
            <button className="ml-2" onClick={() => push()}> Push</button>
            <button className="ml-2" onClick={() => pop()}> Pop</button>
            <button className="ml-2" onClick={() => shift()}> Shift</button>
            <button className="ml-2" onClick={() => unshift()}> Unshift</button>
        </div>
    )
}

export default LinkedList
