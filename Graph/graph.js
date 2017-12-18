// graph representation using adjacency list.

/**
 * @constructor
 */
function Graph() {
    this.vertices = []; // array of vertices
    this.edges = []; // adjacency list
    this.numberOfEdges = 0;
}
/**
 * @method to add vertex
 * @param vertex 
 */
Graph.prototype.addVertex = function(vertex) {
    this.vertices.push(vertex);
    // each vertex index would point to a array(adjacency list)
    this.edges[vertex] = [];
};
/**
 * @method to add edge
 * @param start vertext and end vertex
 */
Graph.prototype.addEdge = function(startVertex, endVertex) {
    this.edges[startVertex].push(endVertex);
    // its a undirected graph so below statement.
    this.edges[endVertex].push(startVertex);
    this.numberOfEdges++;
};
/**
 * @method to remove edge
 * @param start vertex and end vertex
 */
Graph.prototype.removeEdge = function(startVertex, endVertex) {
    var index1 = this.edges[startVertex] ? this.edges[startVertex].indexOf(endVertex) : -1;
    var index2 = this.edges[endVertex] ? this.edges[endVertex].indexOf(startVertex) : -1;
    if (~index1) {
        this.edges[startVertex].splice(index1, 1);
        this.numberOfEdges--;
    }
    if (~index2) {
        this.edges[endVertex].splice(index2, 1);
    }
};
/**
 * @method to remove vertex
 * @param vertex
 */
Graph.prototype.removeVertex = function(vertex) {
    var index = this.vertices.indexOf(vertex)
    if (~index) {
        this.vertices.splice(index, 1)
    }
    while (this.edges[vertex].length) {
        var adjVertex = this.edges[vertex].pop();
        this.removeEdge(adjVertex, vertex);
    }
};

var graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(1, 4);
// graph.removeEdge(1, 4);
console.log(graph);
graph.removeVertex(4);
console.log(graph);