class Node {
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.right = null;
        this.left = null;
    }
}
class BinaryTree {
    constructor(){
        this.root = null;
        this.nodeCount = 0;
    }
    put(key, value) {
        const newNode = new Node(key, value);
        
        if(!this.root) {
            this.root = newNode;
            return;
        }

        let currentNode = this.root;
        let parentNode = null
        
        while(currentNode !== null) {
            parentNode = currentNode;
            
            if(key > currentNode.key) {
                currentNode = currentNode.right;
            } else if(key < currentNode.key){
                currentNode = currentNode.left;
            } else {
                currentNode.value = value;
                return;
            }
        }

        if(key > parentNode.key) {
            parentNode.right = newNode
        } else if(key < parentNode.key) {
            parentNode.left = newNode
        }
        this.nodeCount++;
    }
    get(key) {
        const node = this.#find(key);

        return node ? node.value : null;
                
    }
    #find(key, node = this.root) { // preorder
        if(!node) return null;
        if(node.key === key) return node;
        if(key < node.key)   return this.#find(key, node.left);
        if(key > node.key)   return this.#find(key, node.right);
    }
    contains(key) {
        return this.find(key) === null ? false : true;
    }
    getMin(node = this.root){
        return _getMin(node);

        function _getMin(node) {
            if(!node)      return null;
            if(!node.left) return node;
            return _getMin(node.left);
        }
    }
    getMax(node = this.root) {
        return _getMax(node);

        function _getMax(node) {
            if(!node)       return null;
            if(!node.right) return node;
            return _getMax(node.right);
        }
    }
    floor(key){ // recursive
        
        return _floor(this.root, key, null);
        
        function _floor(node, key, floor) {
            if(!node) return floor;

            if(key < node.key) {
               return _floor(node.left, key, floor)
            } else {
                return _floor(node.right, key, node.key);
            }
        }
    }
    ceil(key) { // iterative
        if(!this.root) return null;

        let target = this.root;
        let ceil = null;

        while(target) {
            if(key > target.key) {
                target = target.right;
            } else if(key < target.key) {
                ceil = target.key;
                target = target.left;
            } else {
                ceil = target.key;
                return ceil;
            }
        }

        return ceil;
    }
    size(){
        return this.nodeCount;
    }
    remove(key) {
        if(this.contains(key)) {
            this.root = this.#removeNode(key, this.root);
            this.nodeCount--;
            return true;
        }
        return false;
    }
    
    #removeNode(key, node){
        if(!node) return null;
        
        if(key < node.key) {
            node.left = this.#removeNode(key, node.left);
        } else if(key > node.key) {
            node.right = this.#removeNode(key, node.right);
        } else {
            if(!node.left && !node.right)      node = null;
            else if(node.left && !node.right)  node = node.left;
            else if(!node.left && node.right)  node = node.right;
            else {
                const minRightNode = this.getMin(node.right);
                node.key = minRightNode.key;
                node.value = minRightNode.value;
                node.right = this.#removeNode(minRightNode.key, node.right);
            }
        }

        return node;

    }
}

