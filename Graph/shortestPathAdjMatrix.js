// dijkstra shortest path algorithm implemetation
// assuimg a graph to be a adjacency matrix rep
// if a graph is adj list rep then its more optimal and using dijkstra algo with priority queue 

var graph = [
[0, 2, 4, 0, 0, 0],
[0, 0, 2, 4, 2, 0],
[0, 0, 0, 0, 3, 0],
[0, 0, 0, 0, 0, 2],
[0, 0, 0, 3, 0, 2],
[0, 0, 0, 0, 0, 0]
];

var INF = Number.MAX_SAFE_INTEGER;

var minDistance = function (dist, visited) {

    var min = INF,
        minIndex = -1;
// logic to find the vertex with min dist
    for (var v = 0; v < dist.length; v++) {
        if (visited[v] == false && dist[v] <= min) {
            min = dist[v];
            minIndex = v;
        }
    }

    return minIndex;
};

var dijkstra = function (src) {
    var dist = [];
    var visited = [];
    var graphLength = graph.length;
    for (var i = 0; i < graphLength; i++) {
        dist[i] = INF;
        visited[i] = false;
    }
    dist[src] = 0;

    for (var i = 0; i < graphLength-1; i++){
// pick a vertex with min distance
        var u = minDistance(dist, visited);
// here u become our current vertex.
        visited[u] = true;
// visit current vertex neighbour and calculate the min distance.
        for (var v = 0; v < graphLength; v++){
            if (!visited[v] && graph[u][v]!=0 && dist[u] != INF && dist[u]+graph[u][v] < dist[v]){
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }

    return dist;
}

var dist = dijkstra(0);

for (i = 0; i < dist.length; i++){
    console.log(i + '\t\t' + dist[i]);
}