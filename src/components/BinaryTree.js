import React, { useState } from 'react'
import { TreeNode } from '../helperMethods/DataStructureClasses'
import { drawNode, getXPos, drawConnection } from '../helperMethods/BinarySearchHelpers';

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value)
        const midPoint = Math.floor((window.innerWidth * .9) / 2)
        if(!this.root) {
            //location on canvas for root node
            const xPos = midPoint
            const yPos = 25
            const radius = 18

            //assign the node position points so they can be referenced later
            newNode.x = xPos
            newNode.y = yPos

            drawNode(value, xPos, yPos, radius)

            this.root = newNode
            return this
        }

        this.checkValue(this.root, newNode)
    }

    checkValue(prevNode, newNode){
        if(parseInt(prevNode.value) > parseInt(newNode.value)){
            if(prevNode.left === null){
                const xPos = getXPos(prevNode, this.root, true)
                const yPos = prevNode.y + 50
                const radius = 18
                
                //assign the node position points so they can be referenced later
                newNode.x = xPos
                newNode.y = yPos

                drawNode(parseInt(newNode.value), xPos, yPos, radius)
                setTimeout(() => drawConnection(prevNode.x, prevNode.y, xPos, yPos), 1750)
                prevNode.left = newNode
                return this
            }
            prevNode = prevNode.left
            setTimeout(() => this.checkValue(prevNode, newNode), 250)
        }

        else if(parseInt(prevNode.value) < parseInt(newNode.value)){
            if(prevNode.right === null){
                const xPos = getXPos(prevNode, this.root, false)
                const yPos = prevNode.y + 50
                const radius = 18
                
                //assign the node position points so they can be referenced later
                newNode.x = xPos
                newNode.y = yPos

                drawNode(parseInt(newNode.value), xPos, yPos, radius)
                setTimeout(() => drawConnection(prevNode.x, prevNode.y, xPos, yPos), 1750)
                prevNode.right = newNode
                return this
            }

            prevNode = prevNode.right
            setTimeout(() => this.checkValue(prevNode, newNode), 250)
        } 
        
        else {
            prevNode.frequency += 1
            return this
        }
    }

    find(value, node = this.root){
        if(!node){
            alert(`No node with value ${value} was found`)
            return false
        }

        if(parseInt(value) === parseInt(node.value)){
            drawNode(parseInt(node.value), node.x, node.y, 18, "#00FF00")
            return node
        }
        else if(parseInt(value) < parseInt(node.value)){
            drawNode(parseInt(node.value), node.x, node.y, 18, "#ffa500")
            if(node.left !== null){
                setTimeout(() => drawConnection(node.x, node.y, node.left.x, node.left.y, "#ffa500"), 1750)
            }
            setTimeout(() => this.find(value, node.left), 2000)
        }
        else if(parseInt(value) > parseInt(node.value)){
            drawNode(parseInt(node.value), node.x, node.y, 18, "#ffa500")
            if(node.right !== null){
                setTimeout(() => drawConnection(node.x, node.y, node.right.x, node.right.y, "#ffa500"), 1750)
            }
            setTimeout(() => this.find(value, node.right), 2000)
        }
        else{
            return false
        }
    }
}

const BinarySearchTree = () => {

    const [tree, setTree] = useState(new BinaryTree())


    const randomBinaryTree = () => {
        let i = 0
        while(i < 100){
            tree.insert(Math.floor((Math.random() * 100)))
            i++
        }
    }

    return (
        <div id="binary-tree-page" className="h-screen w-screen">
            <canvas id="tree-canvas" className="mt-2 ml-2 border-gray-200 border-2" width={window.innerWidth * .9} height={window.innerHeight * .9} >
                
            </canvas>
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
                <button className="m-6" onClick={randomBinaryTree} >
                    Random Tree
                </button>
                <button className="m-6" onClick={randomBinaryTree} >
                    Reset
                </button>
            </div>
        </div>
    )
}

export default BinarySearchTree
