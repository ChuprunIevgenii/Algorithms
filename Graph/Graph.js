const Vertex = require('./Vertex.js');
const Edge = require('./Edge.js');


class Graph {
    constructor(isDirected = false) {
        this.vertices = {};
        this.edges = {};
        this.isDirected = false;
    }
    addVertex(vertex) {
        this.vertices[vertex.getKey()] = vertex;
        return this;
    }
    addEdge(edge) {
        this.edges[edge.getKey()] = edge;

        if(isDirected) {

        } else {
            
        }
    }
}

const A = new Vertex('A');
const B = new Vertex('B');
const C = new Vertex('C');
const D = new Vertex('D');
const E = new Vertex('E');
const F = new Vertex('F');
const G = new Vertex('G');
const H = new Vertex('H');

const AB = new Edge(A, B);

const Graph1 = new Graph();

Graph1
    .addVertex(A)
    .addVertex(B)
    .addVertex(C)
    .addVertex(D)
    .addVertex(E)
    .addVertex(F)
    .addVertex(G)
    .addVertex(H)


console.log(AB);



    