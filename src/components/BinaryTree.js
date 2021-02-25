import React, { useState } from 'react'
import { TreeNode } from '../helperMethods/DataStructureClasses'

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value)

        //Used to render node onto page in correct position
        const container = document.getElementById("tree-container")
        const div = document.createElement("div")
        div.nodeValue = newNode.value

        if(!this.root) {
            this.root = newNode
            div.style.border = "2px solid black"
            div.style.borderRadius = "50%"
            div.style.left = "50%"
            div.style.webkitTransform = "translate(-50%, 0)"
            div.style.position = "absolute"
            div.innerHTML = value
            container.append(div)
            return this
        }
    }

    checkValue(current, newNode){
        if(current.value > newNode.value){
            if(current.left === null){
                current.left = newNode
                return this
            }
            current = current.left
            setTimeout(() => this.checkValue(current, newNode), 1000)
        }
        else if(current.value < newNode.value){
            if(current.right === null){
                current.right = newNode
                return this
            }
            current = current.right
            setTimeout(() => this.checkValue(current, newNode), 1000)
        } else {
            current.frequency += 1
            return this
        }
    }

    find(value, node = this.root){
        if(!node){
            return false
        }

        if(value === node.value){
            return node
        }
        else if(value < node.value){
            this.find(value, node.left)
        }
        else if(value > node.value){
            this.find(value, node.right)
        }
        else{
            return false
        }
    }
}

const BinarySearchTree = () => {

    const [tree, setTree] = useState(new BinaryTree())

    return (
        <div id="binary-tree-page" className="h-screen w-screen">
            <div id="tree-container" className="h-5/6 w-full">

            </div>
            <div className="flex flex-row">
                <form 
                onSubmit={(event) => {
                    event.preventDefault()
                    tree.insert(event.target[0].value)
                }}>
                    <input className="m-6" type="number" id="value" placeholder="0"></input>
                    <button type="submit">
                        Add
                    </button>
                </form>
                <form 
                onSubmit={(event) => {
                    event.preventDefault()
                    tree.find(event.target[0].value)
                }}>
                    <input className="m-6" type="number" id="value" placeholder="0"></input>
                    <button type="submit" >
                        Find
                    </button>
                </form>
            </div>
        </div>
    )
}

export default BinarySearchTree
