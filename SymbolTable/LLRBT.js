const colors = {
    RED: 'red',
    BLACK: 'black'
}
class Node {
    constructor({ key, value, color = colors.RED }){
        this.key = key;
        this.value = value;
        this.right = null;
        this.left = null;
        this.color = color;
    }
}
class LeftLeaningRedBlackTree { //Left Leaning Red Black Binary Tree
    constructor(){
        this.root = null;
        this.nodeCount = 0;
    }
    put(key, value) {
        
        if(!this.root) return this.root = new Node({ key, value, color: colors.BLACK });
        
        this.root = this.#insert(key, value, this.root);
        this.root.color = colors.BLACK;
        this.nodeCount++;
    }
    get(key) {
        const node = this.#find(key);

        return node ? node.value : null;      
    }
    contains(key) {
        return this.#find(key) !== null;
    }
    getMin(node = this.root){
        if(!node) return null;
        while(node.left) {
            node = node.left;
        }
        return node;
    }

    getMax(node = this.root) {
        if(!node) return null;
        while(node.right) {
            node = node.right;
        }
        return node;
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
    #insert(key, value, node) {
        if (node === null) return new Node({ key, value });

        const com = this.#compareTo(node.key, key);

        if     (com > 0) node.right = this.#insert(key, value, node.right);
        else if(com < 0) node.left = this.#insert(key, value, node.left);
        else node.value = value;

        if(this.#isRed(node.right) && !this.#isRed(node.left))    node = this.#rotateLeft(node);
        if(this.#isRed(node.left) && this.#isRed(node.left.left)) node = this.#rotateRight(node);
        if(this.#isRed(node.left) && this.#isRed(node.right)) this.#colorFlip(node);

        return node;
    }
    #compareTo(a, b) {
        return a - b;
    }
    #isRed(node) {
        return node.color === colors.RED;
    }
    #find(key, node = this.root) { // preorder
        if(!node) return null;
        if(node.key === key) return node;
        if(key < node.key)   return this.#find(key, node.left);
        if(key > node.key)   return this.#find(key, node.right);
    }
    #rotateLeft(node) {
        const next = node.right;
        node.right = next.left;
        next.left = node;
        next.color = node.color;
        node.color = colors.RED;
        return next;
    }
    #rotateRight(node) {
        const next = node.left;
        node.left = next.right;
        next.right = node;
        next.color = node.color;
        node.color = colors.RED;
        return next;
    }
    #colorFlip(node) {
        if(!node) return;

        node.color = colors.RED;
        if(node.left) node.left.color = colors.BLACK;
        if(node.right) node.right.color = colors.BLACK;
    }
}

