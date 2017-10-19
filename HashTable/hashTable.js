// implementation of hashtable
// constructor function for the hash table.
function HashTable(size) {
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
}
// constructor function for node in hashtable
function HashNode(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
}
// method to generate the hash for key.
HashTable.prototype.hash = function (key) {
    var total = 0;
    for (var i = 0; i < key.length; i++) {
        total = total + key.charCodeAt(i);
    }
    var bucket = total % this.numBuckets;
    return bucket;
}

// method to insert a node in hashtable.
HashTable.prototype.insert = function (key, value) {
    var index = this.hash(key);
    if (!this.buckets[index]) {
        this.buckets[index] = new HashNode(key, value)
    }
    else if (this.buckets[index].key === key) {
        this.buckets[index].value = value;
    }
    else {
        var currentNode = this.buckets[index];
        while (currentNode.next) {
            if (currentNode.next.key === key) {
                currentNode.next.value = value;
                return;
            }
            currentNode = currentNode.next;
        }
        currentNode.next = new HashNode(key, value);
    }
}

//method to get node from hasttable.
HashTable.prototype.get = function (key) {
    var index = this.hash(key);
    if (!this.buckets[index]) return null;
    else {
        var currentNode = this.buckets[index];
        while (currentNode) {
            if (currentNode.key === key) {
                return currentNode.value;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
}

// function to retrieve all the nodes from hashtable.
HashTable.prototype.retrieveAll = function () {
    var allNodes = [];
    for (var i = 0; i <= this.numBuckets; i++) {
        var currentNode = this.buckets[i];
        while (currentNode) {
            allNodes.push(currentNode);
            currentNode = currentNode.next;
        }
    }
    return allNodes;
}
var myHT = new HashTable(30);
myHT.insert("allo", "allo@yahoo.com");
myHT.insert("monu", "monu@yahoo.com");
myHT.insert("monu", "yeh@yahoo.com");
myHT.insert("john", "john@gmail.com");
myHT.insert("doe", "doe@hotmail.com");
myHT.insert("onum", "unom@gmail.com");
// console.log(myHT.get("unom"));
// console.log(myHT.buckets);
console.log(myHT.retrieveAll());

