var graph = {
    A:{B:2,C:4},
    B:{C:2,D:4,E:2},
    C:{E:3},
    D:{F:2},
    E:{D:3,F:2},
    F:{}
    };


var vertexArr = Object.keys(graph);

for(var i =0 ;i <vertexArr.length; i++){
    var neighbor = Object.keys(graph[vertexArr[i]])
    for(var j= 0;j<neighbor.length;j++){
        var prop1 = vertexArr[i].toString();
        var prop2 = neighbor[j].toString();
       console.log(graph[prop1][prop2]);
    }
}