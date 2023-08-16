const Vertex = require('./Vertex.js');
const Edge = require('./Edge.js');

class Graph {
    constructor(isDirected = false) {
        this.vertices = {};
        this.edges = {};
        this.isDirected = isDirected;
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
    getVertices() {
        return Object.values(this.vertices); 
    }
    bfs(startVertex, goalVertex) {
        let queue = [startVertex];
        const visited = new Set();

        while(queue.length) {
            const currentVertex = queue.shift(); // to achive O(1), use queue based on LinkedList
            
            if(!visited.has(currentVertex.getKey())) {
                if(currentVertex.getKey() === goalVertex.getKey()) return true;
                visited.add(currentVertex.getKey())
                const neighbours = this.getNeighbours(currentVertex);

                for(const neighbour of neighbours) {
                    if(!visited.has(neighbour)) {
                        queue.push(neighbour)
                    }
                }
            }
            
        }

        return false; 
    }
    dfs(startVertex, goalVertex) {
        let stack = [startVertex];
        const visited = new Set();

        while(stack.length) {
            const currentVertex = stack.pop();

            if(!visited.has(currentVertex.getKey())) {
                if(currentVertex.getKey() === goalVertex.getKey()) return true;
                visited.add(currentVertex.getKey())
                const neighbours = this.getNeighbours(currentVertex);

                for(const neighbour of neighbours) {
                    if(!visited.has(neighbour)) {
                        stack.push(neighbour)
                    }
                }
            }
        }

        return false;
    }


    
    topologicalSort() {
        const visited = new Set();
        const stack = [];
        const startVertex = this.getVertices()[0];
    
        const topologicalDFS = vertex => {
            if(visited.has(vertex.getKey())) return;
            visited.add(vertex.getKey());
            console.log(this);
            const neighbours = this.getNeighbours(vertex);
            
            for(const neighbour of neighbours) {
                topologicalDFS(neighbour);
            }
            
            stack.push(vertex);
        }

        topologicalDFS(startVertex);

        return stack.reverse();
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
//const AC = new Edge(A, C);
const AD = new Edge(A, D);
const DH = new Edge(D, H);
const BE = new Edge(B, E);
const EH = new Edge(E, H);

const Graph1 = new Graph(true);

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
    //.addEdge(AC)
    .addEdge(AD)
    .addEdge(DH)
    .addEdge(BE)
    .addEdge(EH)

console.log(Graph1.topologicalSort());




    