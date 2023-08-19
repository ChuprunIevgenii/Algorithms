class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    get(value) {        
        let node = this.head;

        while(node !== null) {
            if(node.value === value) return node.value;
            node = node.next;
        }

        return null;
    }
    put(value) {
        let node = this.head;
        
        while(node !== null) {
            if(value === node.value) {
                node.value = value;
                return;
            }
            node = node.next;
        }

        const newNode = new Node(value);
        
        if(this.tail === null) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        
        this.tail = newNode;
        this.size++;
    }
    delete(value) {
        if (!this.head) return null;
                
        if(this.head.value === value) {
            const deletedNode = this.head;
            this.head = this.head.next;
            
            if(!this.head) this.tail = null;
            
            return deletedNode;
        }
        
        let currentNode = this.head.next;
        let previousNode = null;

        while(currentNode) {
            if(currentNode.value === value) {
                previousNode.next = currentNode.next;

                if (currentNode === this.tail) {
                    this.tail = previousNode;
                }

                return currentNode;
            }
            
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        return null;
    }
    toArray() {
        const nodes = [];
        let node = this.head;

        while(node) {
            nodes.push(node.value);
            node = node.next;
        }

        return nodes;
    }
}

module.exports = LinkedList;