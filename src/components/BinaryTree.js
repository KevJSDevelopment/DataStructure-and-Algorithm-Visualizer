import React, { useState } from 'react'
import { BinaryTree } from '../helperMethods/DataStructureClasses'

const BinarySearchTree = () => {

    const [tree, setTree] = useState(new BinaryTree())

    const insert = (value) => {

    }

    const find = (value) => {
        
    }

    return (
        <div className="h-screen">
            <div id="tree-container" className="h-5/6 w-full">

            </div>
            <div className="flex flex-row">
                <form>
                    <input className="m-6" type="number" id="value" placeholder="0"></input>
                    <button 
                    type="submit" 
                    onSubmit={(event) => {
                        event.preventDefault()
                        insert(event.target[0].value)
                    }}>
                        Add
                    </button>
                </form>
                <form>
                    <input className="m-6" type="number" id="value" placeholder="0"></input>
                    <button 
                    type="submit" 
                    onSubmit={(event) => {
                        event.preventDefault()
                        find(event.target[0].value)
                    }}>
                        Find
                    </button>
                </form>
            </div>
        </div>
    )
}

export default BinarySearchTree
