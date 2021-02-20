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
}

class DoublyLinkedList {

}

const LinkedList = () => {

    const [list, setList] = useState(new SinglyLinkedList())
    const [last, setLast] = useState(0)

    
    const push = () => {
        const value = last + 1
        const container = document.querySelector("#node-container")
        if(list.length === 0){
            const div = document.createElement("div")
            div.style.marginLeft = "1%"
            div.style.borderRadius = "50%"
            div.style.padding = "1%"
            div.style.border = '2px solid blue'
            div.innerHTML = value
            div.id = "div-head"
            container.append(div)
        } else {
            if(list.length > 1){
                const oldTail = document.getElementById("div-tail")
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
            div.id = "div-tail"

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
            const head = document.getElementById("div-head")
            container.removeChild(head)
        }
        else {
            const oldTail = document.getElementById("div-tail")
            container.removeChild(oldTail)

            const oldLastSpacer = document.getElementById("last-spacer")
            container.removeChild(oldLastSpacer)

            if(list.length !== 1){
                const newTail = document.getElementById(`node-${list.tail.value}`)
                newTail.id = "div-tail"
                newTail.style.borderColor = "lightgreen"
    
                const newLastSpacer = document.getElementById(`spacer-${list.length - 1}`)
                newLastSpacer.id = "last-spacer"
            }
        }
        setLast(value)
        
    }

    useEffect(() => {
        list.head = 0
    }, [])

    return (
        <div>
            <div id="node-container" className="flex flex-row h-24">

            </div>
            <button onClick={() => push()}> Add 1 to list</button>
            <button onClick={() => pop()}> Remove 1 from list</button>
        </div>
    )
}

export default LinkedList
