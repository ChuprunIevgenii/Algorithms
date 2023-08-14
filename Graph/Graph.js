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
        
        if(this.isDirected) {
            edge.startVertex.addEdge(edge);
        } else {
            edge.startVertex.addEdge(edge);
            edge.endVertex.addEdge(edge);
        }

        return this;
    }
    getNeighbours(vertex) {
        return this.vertices[vertex.getKey()].getNeighbours();
    }
    bfs(startVertex, goalVertex) {
        let queue = [startVertex];
        const visited = {};

        while(queue.length) {
            const targetVertex = queue.shift();
            
            if(!visited[targetVertex.getKey()]) {
                if(targetVertex.getKey() === goalVertex.getKey()) return true;
                visited[targetVertex.getKey()] = true;
                const neighbours = this.getNeighbours(targetVertex);
                const unvisitedNeighbours = neighbours.filter(v => !visited[v.getKey()]);
                queue.push(...unvisitedNeighbours)
            }
            
        }

        return false; 
    }
    dfs(startVertex, goalVertex) {

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
const Z = new Vertex('Z');


const AB = new Edge(A, B);
const BF = new Edge(B, F);
const FH = new Edge(F, H);
const HG = new Edge(H, G);
const GC = new Edge(G, C);
const AC = new Edge(A, C);
const AD = new Edge(A, D);
const DH = new Edge(D, H);
const BE = new Edge(B, E);
const EH = new Edge(E, H);

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

Graph1
    .addEdge(AB)
    .addEdge(BF)
    .addEdge(FH)
    .addEdge(HG)
    .addEdge(GC)
    .addEdge(AC)
    .addEdge(AD)
    .addEdge(DH)
    .addEdge(BE)
    .addEdge(EH)

console.log(Graph1.bfs(A, H));




    