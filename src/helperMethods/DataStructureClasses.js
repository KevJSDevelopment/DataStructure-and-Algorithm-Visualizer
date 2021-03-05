export class ListNode {
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}


export class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.frequency = 0;
        this.x = 0;
        this.y = 0;
        this.nodeNumberOnBranch = 0;
    }
}

export class HeapNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null; 
    }
}


class Graph {
    constructor(){
           this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2) {
        let array = []
        for(let i = 0; i < this.adjacencyList[vertex1]; i++){
            if(this.adjacencyList[vertex1][i] !== vertex2) {
                array.push(this.adjacencyList[vertex1][i])
            }
        }

        let array2 = []
        for(let i = 0; i < this.adjacencyList[vertex2]; i++){
            if(this.adjacencyList[vertex2][i] !== vertex1) {
                array2.push(this.adjacencyList[vertex2][i])
            }
        }

        this.adjacencyList[vertex1] = array
        this.adjacencyList[vertex2] = array2
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }

    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            });
        })(start);

        return result;
    }
    
    depthFirstIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
               if(!visited[neighbor]){
                   visited[neighbor] = true;
                   stack.push(neighbor)
               } 
            });
        }
        return result;
    }
}