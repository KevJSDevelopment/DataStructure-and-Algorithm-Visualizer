import React, { useState } from 'react'
import { TreeNode } from '../helperMethods/DataStructureClasses'

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value)

        //Used to render node onto page in correct position
        const canvas = document.getElementById("tree-canvas")
        if(!this.root) {
            this.root = newNode
            if (canvas.getContext) {
                var ctx = canvas.getContext("2d");
                var w = 36;
                var x = Math.floor((window.innerWidth * .9) / 2)
                var y = 50
                ctx.beginPath();
                ctx.arc(x, y, w/2, 0, 2 * Math.PI, false);
                ctx.stroke()
    
                ctx = canvas.getContext("2d");
                ctx.font = '10pt Georgia';
                ctx.fillStyle = 'black';
                ctx.textAlign = 'center';
                ctx.fillText(value, x, y+3);
            }
            return this
        }

        // return this.checkValue
    }

    checkValue(current, newNode){
        if(current.value > newNode.value){
            if(current.left === null){
                current.left = newNode
                return this
            }
            current = current.left
            setTimeout(() => this.checkValue(current, newNode), 250)
        }
        else if(current.value < newNode.value){
            if(current.right === null){
                current.right = newNode
                return this
            }
            current = current.right
            setTimeout(() => this.checkValue(current, newNode), 250)
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
            </div>
        </div>
    )
}

export default BinarySearchTree
