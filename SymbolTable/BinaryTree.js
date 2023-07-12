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
        this.size = 0;
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
        this.size++;
    }
    get(key) {
        return _get(this.root, key);
                
        function _get(node, key) {
            if(!node) return null;
            if(node.key === key) return node.value;
            if(key < node.key)   return _get(node.left);
            if(key > node.key)   return _get(node.right);
        }
    }
    getMin(){
        return _getMin(this.root);

        function _getMin(node) {
            if(!node)      return null;
            if(!node.left) return node;
            return _getMin(node.left);
        }
    }
    getMax(){
        return _getMax(this.root);

        function _getMax(node) {
            if(!node)       return null;
            if(!node.right) return node;
            return _getMax(node.right);
        }
    }
    floor(key){
       
    }
    ceil(){

    }
    size(){

    }
    delete(key){

    }
}