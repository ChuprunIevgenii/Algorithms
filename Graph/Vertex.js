const LinkedList = require('../SymbolTable/LinkedList.js');

class Vertex {
    constructor(value) {
        this.value = value;
        this.edges = new LinkedList();
    }
    addEdge(edge) {
        this.edges.put(edge);
        
        return this;
    }
    getKey() {
        return this.value.toString();
    }
    getNeighbours() {
        const edgesArr = this.edges.toArray();
        return edgesArr.map(edge => edge.startVertex === this ? edge.endVertex : edge.startVertex);
    }
}

module.exports = Vertex;
