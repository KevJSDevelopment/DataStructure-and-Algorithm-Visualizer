import React, { useState } from 'react'
import { TreeNode } from '../helperMethods/DataStructureClasses'

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value)

        if(!this.root) {
            //location on canvas for root node
            const x = Math.floor((window.innerWidth * .9) / 2)
            const y = 25
            const w = 18

            //assign the node position points so they can be referenced later
            newNode.x = x
            newNode.y = y

            drawNode(value, x, y, w)

            this.root = newNode
            return this
        }

        this.checkValue(this.root, newNode)
    }

    checkValue(current, newNode){
        if(parseInt(current.value) > parseInt(newNode.value)){
            if(current.left === null){
                let x
                if(current === this.root) x = current.x - 250
                else x = current.x - 45
                const y = current.y + (Math.floor((window.innerHeight * .9 - current.y))) / 7
                const w = 18
                
                //assign the node position points so they can be referenced later
                newNode.x = x
                newNode.y = y

                drawNode(parseInt(newNode.value), x, y, w)
                setTimeout(() => drawConnection(current.x, current.y, x, y), 1000)
                current.left = newNode
                return this
            }
            current = current.left
            setTimeout(() => this.checkValue(current, newNode), 250)
        }
        else if(parseInt(current.value) < parseInt(newNode.value)){
            if(current.right === null){
                let x
                if(current === this.root) x = current.x + 250
                else x = current.x + 45
                const y = current.y + (Math.floor((window.innerHeight * .9 - current.y))) / 7
                const w = 18
                
                //assign the node position points so they can be referenced later
                newNode.x = x
                newNode.y = y

                drawNode(parseInt(newNode.value), x, y, w)
                setTimeout(() => drawConnection(current.x, current.y, x, y), 1000)
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

const drawNode = (value, xPos, yPos, w, startAngle = 1.9 * Math.PI) => {
    const canvas = document.getElementById("tree-canvas")
    if(canvas.getContext){
        let ctx = canvas.getContext("2d");
        if(startAngle > 0){
            ctx.beginPath();
            ctx.arc(xPos, yPos, w, startAngle, 2 * Math.PI, false);
            ctx.stroke()
            setTimeout(() => drawNode(value, xPos, yPos, w, startAngle - .1), 20)
        }
        else {
            ctx.beginPath();
            ctx.arc(xPos, yPos, w, 0, 2 * Math.PI, false);
            ctx.stroke()
            ctx.font = '10pt Georgia';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.fillText(value, xPos, yPos + 3);
        }
    }
}

const drawConnection = (x1, y1, x2, y2) => {

    const canvas = document.getElementById("tree-canvas")
    if(canvas.getContext){
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke(); 
        // if(x1 < x2){
        //     ctx.moveTo(x1, y1);
        //     ctx.lineTo(x1 + 2, y1 + 2);
        //     ctx.stroke();
        //     setTimeout(() => drawConnection(x1 + 2, y1 + 2, x2, y2), 20)
        // }
        // else {
        //     ctx.moveTo(x1, y1);
        //     ctx.lineTo(x2, y2);
        //     ctx.stroke(); 
        // }
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
