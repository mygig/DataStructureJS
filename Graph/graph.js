// graph representation for unweighted undirected graph using adjacency list.

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
/**
 * @method to print graph
 */
Graph.prototype.print = function() {
    console.log(this.vertices.map(function(vertex) {
        return (vertex + ' -> ' + this.edges[vertex].join(', ')).trim();
    }, this).join(' | '));
};

/**
 * @method Breadth first traversal
 * @param starting vertex
 */
Graph.prototype.traverseBFS = function(vertex) {
    var index = this.vertices.indexOf(vertex);
    if (index === -1) {
        return console.log("vertex not found in the graph");
    }
    var queue = [];
    queue.push(vertex);
    var visited = [];
    visited[vertex] = true;
    while (queue.length) {
        vertex = queue.shift();
        console.log(vertex);
        // find the adjacent vertex of the deleted vertex from queue
        for (var i = 0; i < this.edges[vertex].length; i++) {
            if (!visited[this.edges[vertex][i]]) {
                visited[this.edges[vertex][i]] = true;
                queue.push(this.edges[vertex][i]);
            }
        }

    }
};
/**
 * method to find the shortest path
 * @param {*} srcVertex 
 * @param {*} destVertex 
 */
Graph.prototype.pathFromTo = function (srcVertex, destVertex){
    var index = this.vertices.indexOf(srcVertex);
    if (index === -1) {
        return console.log("vertex not found in the graph");
    }
    var queue = [];
    queue.push(srcVertex);
    var visited = [];
    visited[srcVertex] = true;
    var paths = [];
  
    while(queue.length) {
      var vertex = queue.shift();
      for(var i = 0; i < this.edges[vertex].length; i++) {
        if(!visited[this.edges[vertex][i]]) {
          visited[this.edges[vertex][i]] = true;
          queue.push(this.edges[vertex][i]);
          // save paths between vertices
          paths[this.edges[vertex][i]] = vertex;
        }
      }
    }
    if(!visited[destVertex]) {
      return undefined;
    }
  
    var path = [];
    for(var j = destVertex; j != srcVertex; j = paths[j]) {
      path.push(j);
    }
    path.push(j);
    return path.reverse().join('-');
}

/**
 * @method depth first search traversal iterative
 */
Graph.prototype.traverseDFS = function(vertex){
    var index = this.vertices.indexOf(vertex);
    if(index === -1){
        return console.log("vertex not found !");
    }

    var stack = [];
    stack.push(vertex);
    var visited = [];
    visited[vertex] = true;
    while(stack.length){
        var vertex = stack.pop();
        console.log(vertex)
        for(var i=0 ;i<this.edges[vertex].length; i++){
            if(!visited[this.edges[vertex][i]]){
                stack.push(this.edges[vertex][i]);
                visited[this.edges[vertex][i]] = true;
            }
        }
    }
}
var graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.print(); // 1 -> | 2 -> | 3 -> | 4 -> | 5 -> | 6 ->
graph.addEdge(1, 2);
graph.addEdge(1, 5);
graph.addEdge(2, 3);
graph.addEdge(2, 5);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(4, 6);
graph.print(); // 1 -> 2, 5 | 2 -> 1, 3, 5 | 3 -> 2, 4 | 4 -> 3, 5, 6 | 5 -> 1, 2, 4 | 6 -> 4
console.log("BFS traversal as below")
graph.traverseBFS(1);
// console.log(graph.pathFromTo(1,6));
console.log("DFS traversal as below:")
graph.traverseDFS(1)