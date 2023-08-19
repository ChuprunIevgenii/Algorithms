const Vertex = require('./Vertex.js');
const Edge = require('./Edge.js');

class Graph {
    constructor(isDirected = false) {
        this.vertices = {};
        this.edges = {};
        this.isDirected = isDirected;
    }
    getVertexByKey(vertexKey) {
        return this.vertices[vertexKey];
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
    deleteEdge(edge) {
        if (this.edges[edge.getKey()]) {
            delete this.edges[edge.getKey()];
          } else {
            throw new Error('Edge not found in graph');
          }
      
          const startVertex = this.getVertexByKey(edge.startVertex.getKey());
          const endVertex = this.getVertexByKey(edge.endVertex.getKey());
      
          startVertex.deleteEdge(edge);
          endVertex.deleteEdge(edge);
    }
    reverse() {
        this.getAllEdges().forEach((edge) => {
            this.deleteEdge(edge);
            edge.reverse();
            this.addEdge(edge);
        });
    
        return this;
      }
    getNeighbours(vertex) {
        return this.vertices[vertex.getKey()].getNeighbours();
    }
    getVertices() {
        return Object.values(this.vertices); 
    }
    getAllEdges() {
        return Object.values(this.edges);
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
        const vertecies = this.getVertices();
    
        const topologicalDFS = vertex => {
            if(visited.has(vertex.getKey())) return;
            visited.add(vertex.getKey());
            const neighbours = this.getNeighbours(vertex);
            
            for(const neighbour of neighbours) {
                topologicalDFS(neighbour);
            }
            
            stack.push(vertex);
        }

        for(const vertex of vertecies) {
            if(!visited.has(vertex.getKey())) {
                topologicalDFS(vertex);
            }
        }

        return stack.reverse();
    }
}




    