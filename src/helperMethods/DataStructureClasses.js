class ListNode {
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

export  class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value){
        let newNode = new ListNode(value)
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
    unshift(value) {
        const newNode = new ListNode(value)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }

        this.length ++
        return this
    }
}

export class DoublyLinkedList {

}

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.frequency = 0
    }
}

export class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value)
        if(!this.root) {
            this.root = newNode
            return this
        }

        let current = this.root
        while(current !== null){
            if(current.value > newNode.value){
                if(current.left === null){
                    current.left = newNode
                    return this
                }
                current = current.left
            }
            else if(current.value < newNode.value){
                if(current.right === null){
                    current.left = newNode
                    return this
                }
                current = current.right
            } else {
                current.frequency += 1
                return this
            }
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