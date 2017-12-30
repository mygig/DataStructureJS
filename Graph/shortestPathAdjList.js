// implementation of shortest path algorithm when graph is a adj list.

var graph = {
    A: { B: 2, C: 4 },
    B: { C: 2, D: 4, E: 2 },
    C: { E: 3 },
    D: { F: 2 },
    E: { D: 3, F: 2 },
    F: {}
};

var vertexArray = Object.keys(graph);
console.log(vertexArray);
var dist = [];
var visited = [];
// function to find the minimum distance vertex that is current vertex
var minDist = function (dist, visited) {
    var minIndex;
    var min = Number.MAX_SAFE_INTEGER;
    for (var i = 0; i < vertexArray.length; i++) {
        if (!visited[vertexArray[i].toString()] && dist[vertexArray[i].toString()] <= min) {
            min = dist[vertexArray[i].toString()];
            minVertex = vertexArray[i].toString();
        }
    }
    return minVertex;
}

var dijkstra = function (src) {

    // mark all the vertex as not visited
    // mark all the distance of vertices to infinity
    for (var i = 0; i < vertexArray.length; i++) {
        var vertexProp = vertexArray[i].toString();
        dist[vertexProp] = Number.MAX_SAFE_INTEGER;
        visited[vertexProp] = false;
    }

    //mark distance of src starting vertex e.g 'A' as zero
    dist[src] = 0;

    console.log("distance array", dist);
    console.log("visited array", visited);


    for (var j = 0; j < vertexArray.length; j++) {
        // get the current vertex by finding the minimum distance.
        var current = minDist(dist, visited);
        console.log("current vertex " + current);
        visited[current.toString()] = true;
        // visite the neighbor of current vertex and calculate the min distance for the 
        var neighbor = Object.keys(graph[current.toString()]);
        console.log("neighbor " + neighbor);
        for (var k = 0; k < neighbor.length; k++) {
            var prop1 = current.toString();
            var prop2 = neighbor[k].toString();
            console.log(graph[prop1][prop2]);
            if (dist[prop2] > dist[prop1] + graph[prop1][prop2] && !visited[prop2]) {
                dist[prop2] = dist[prop1] + graph[prop1][prop2];
            }
        }
    }

    return dist;

}

var dist = dijkstra('A');
console.log(dist);
