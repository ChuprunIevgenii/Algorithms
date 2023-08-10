class Node {
    constructor(key, value) {
        this.key = key;
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
            if(node.key === key) return node.value;
            node = node.next;
        }

        return null;
    }
    put(key, value) {
        let node = this.head;
        
        while(node !== null) {
            if(key === node.key) {
                node.value = value;
                return;
            }
            node = node.next;
        }

        const newNode = new Node(key, value);
        
        if(this.tail === null) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        
        this.tail = newNode;
        this.size++;
    }
}

module.exports = LinkedList;