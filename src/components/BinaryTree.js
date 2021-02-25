import React, { useState } from 'react'
import { BinaryTree } from '../helperMethods/DataStructureClasses'

const BinarySearchTree = () => {

    const [tree, setTree] = useState(new BinaryTree())

    const insert = (value) => {
        const container = document.getElementById("tree-container")

        const div = document.createElement("div")
        div.style.border = "2px solid black"
        div.style.borderRadius = "50%"
        div.style.left = "50%"
        div.style.webkitTransform = "translate(-50%, 0)"
        div.style.position = "absolute"
        div.innerHTML = value

        container.append(div)
    }

    const find = (value) => {
        
    }

    return (
        <div id="binary-tree-page" className="h-screen w-screen">
            <div id="tree-container" className="h-5/6 w-full">

            </div>
            <div className="flex flex-row">
                <form 
                onSubmit={(event) => {
                    event.preventDefault()
                    insert(event.target[0].value)
                }}>
                    <input className="m-6" type="number" id="value" placeholder="0"></input>
                    <button type="submit">
                        Add
                    </button>
                </form>
                <form 
                onSubmit={(event) => {
                    event.preventDefault()
                    find(event.target[0].value)
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
