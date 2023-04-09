class UnionFind {
    constructor(size) {
        if(size <= 0) throw new Error("Size must be > 0");

        this.elements = new Array(size);
        this.componentsWeight = new Array(size);
        this.componentsCount = size;

        for(let i = 0; i < this.elements.length; i++) {
            this.elements[i] = i;
            this.componentsWeight[i] = 1;
        }
    }
    union(x, y) { // add conection between x and y        
        const rootX = this.find(x);
        const rootY = this.find(y);

        if(rootX === rootY) return;

        const sizeX = this.componentsWeight[rootX];
        const sizeY = this.componentsWeight[rootY];
    
        //Weightening
        if(sizeX > sizeY) {
            this.elements[rootY] = this.elements[rootX];
            this.componentsWeight[rootX] += sizeY;
        } else {
            this.elements[rootX] = this.elements[rootY];
            this.componentsWeight[rootY] += sizeX;
        }

        this.componentsCount--;
        return this.elements;
    }
    find(x) { // component identifier for x
        if(!this.isValid(x)) throw new Error("Invalid value"); 
        if(x === this.elements[x]) return x;
        
        let root = x;

        while(root !== this.elements[root]) {
            root = this.elements[root];
        }

        //path compression
        while(x !== root) {
            let next = this.elements[x];
            this.elements[x] = root;
            x = next;
        }

        return root;
    }
    connected(x, y) { // return true if x and y are in the same component
        return this.find(x) === this.find(y);        
    }
    count() { // number of components
        return this.componentsCount;
    }
    
    isValid(x) {
        return Number.isInteger(x) && x >= 0 && x < this.elements.length
    }
}