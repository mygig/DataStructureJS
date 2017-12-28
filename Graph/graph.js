var Dictionary = require("../Dictionary/dictionary.js");
var Queue = require("../Queue/queue.js");
function Graph() {
    this.vertices = [];
    this.adjList = new Dictionary();
}

Graph.prototype.addVertex = function (vertex) {
    this.vertices.push(vertex);
    this.adjList.set(vertex, []);
};

Graph.prototype.removeVertex = function (vertex) {
    var indexOfVertex = this.vertices.indexOf(vertex);
    if (indexOfVertex !== -1 && indexOfVertex !== undefined) {
        this.vertices.splice(indexOfVertex, 1);
    }
    while (this.adjList.get(vertex).length) {
        var adjVertex = this.adjList.get(vertex).pop();
        this.removeEdge(adjVertex, vertex);
    }
    this.adjList.remove(vertex);
};

Graph.prototype.removeEdge = function (vertex1, vertex2) {
    var index1 = this.adjList.get(vertex1).indexOf(vertex2);
    var index2 = this.adjList.get(vertex2).indexOf(vertex1);

    if (index1 !== undefined && index1 !== -1) {
        this.adjList.get(vertex1).splice(index1, 1);
    }

    if (index2 !== undefined && index2 !== -1) {
        this.adjList.get(vertex2).splice(index2, 1);
    }

};

Graph.prototype.addEdge = function (vertex1, vertex2) {
    this.adjList.get(vertex1).push(vertex2);
    this.adjList.get(vertex2).push(vertex1);
};

Graph.prototype.initializeColor = function(){
   var color = {};
   for(var i= 0 ; i<this.vertices.length ; i++){
       color[this.vertices[i]] = 'white';
   }
   return color;
}

Graph.prototype.traverseBFS = function (srcVertex, callback) {
    var color = this.initializeColor();
    var queue = new Queue();
    queue.enqueue(srcVertex);
    while (!queue.isEmpty()) {
        var vertex = queue.dequeue();
        color[vertex] = 'grey';
        var neighbor = this.adjList.get(vertex);
        for (var i = 0; i < neighbor.length; i++) {
            if (color[neighbor[i]] === 'white') {
                queue.enqueue(neighbor[i]); 
                color[neighbor[i]] = 'grey';
            }
        }
        color[vertex] =  'black';
        if(callback){
            callback(vertex);
        }
    }
};

// finding shortest path using improved BFS
Graph.prototype.shortestPathBFS = function (srcVertex){
    var color = this.initializeColor();
    var queue = new Queue();
    var dist = {};
    var pred = {};
    queue.enqueue(srcVertex);
    for(var i = 0; i<this.vertices.length; i++){
        dist[this.vertices[i]] = 0;
        pred[this.vertices[i]] = null;
    }

    while (!queue.isEmpty()) {
        var vertex = queue.dequeue();
        color[vertex] = 'grey';
        var neighbor = this.adjList.get(vertex);
        for (var i = 0; i < neighbor.length; i++) {
            if (color[neighbor[i]] === 'white') {
                queue.enqueue(neighbor[i]);
                color[neighbor[i]] = 'grey';
                // distance and predecessor values
                dist[neighbor[i]] = dist[vertex] + 1;
                pred[neighbor[i]] = vertex;
            }
        }
        color[vertex] =  'black';
    }
    return {
        distance : dist,
        predecessor : pred
    };
}

Graph.prototype.printShortPathBFS = function(obj){
 var fromVertex = this.vertices[0]; // 'A';
 for(var i = 1;i<this.vertices.length; i++){
    var toVertex = this.vertices[i];
    var path = [];
    for(var v = toVertex; v !== fromVertex; v = obj.predecessor[v]){
        path.push(v);
    }
    path.push(fromVertex);
    var s = path.pop();
    while(path.length){
        s+='-' + path.pop();
    }
    console.log(s);
 }
}

Graph.prototype.traverseDFS = function(callback){
    var color = this.initializeColor();

        for (var i=0; i<this.vertices.length; i++){
            if (color[this.vertices[i]] === 'white'){
                this.dfsVisit(this.vertices[i], color, callback);
            }
        }
}
Graph.prototype.dfsVisit = function(u,color,callback){
    color[u] = 'grey';
    if (callback) {
        callback(u);
    }
    // console.log('Discovered ' + u);
    var neighbors = this.adjList.get(u);
    for (var i=0; i<neighbors.length; i++){
        var w = neighbors[i];
        if (color[w] === 'white'){
            this.dfsVisit(w, color, callback);
        }
    }
    color[u] = 'black';
    // console.log('explored ' + u);
}
Graph.prototype.print = function () {
    var result = '';
    for (var j = 0; j < this.vertices.length; j++) {
        var vertex = this.vertices[j];
        result = result + vertex + '->';
        for (var i = 0; i < this.adjList.get(vertex).length; i++) {
            result = result + this.adjList.get(vertex)[i] + ' ';
        }
        result = result + '\n';
    }
    console.log(result);
};

var graph = new Graph();

var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

// console.log("Before any operation");
// graph.print();
// // graph.removeVertex('A');
// // console.log("After Removal of vertex A");
// //graph.print();
// console.log("After removal of edge A and D");
// graph.removeEdge('A','D');
// graph.print();
//graph.traverseBFS('A',function(vertex){console.log("Visited vertex :" + vertex)});
// var shortpath = graph.shortestPathBFS('A');
// console.log(shortpath);
// graph.printShortPathBFS(shortpath);
graph.traverseDFS(function(vertex){
    console.log("Visited vertex:" + vertex);
})