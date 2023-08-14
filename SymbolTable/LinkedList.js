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
    get(key) {        
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