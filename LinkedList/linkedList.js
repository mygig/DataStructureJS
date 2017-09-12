// implementation of linked list

// constructor function for linked list 
function LinkedList() {
    this.head = null;
    this.length = 0;
}

// constructor function for node 
function Node(data) {
    this.data = data;
    this.next = null;
}

// function to insert node at begining of the list
LinkedList.prototype.addFirst = function(data) {
    var newNode = new Node(data);
    if (this.head) {
        newNode.next = this.head
    }
    this.head = newNode;
    this.length++;
}

// function to insert node at the end of the list
LinkedList.prototype.addLast = function(data) {
    var newNode = new Node(data);
    var current = this.head;
    if (this.head) {
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    } else {
        this.head = newNode;
    }
    this.length++;
}

// function to find the size or lenght of the list.
LinkedList.prototype.size = function() {
    return this.length;
}

// function to find the indexOf element in the list.
LinkedList.prototype.indexOf = function(data) {
    var index = -1;
    var current = this.head;
    while (current) {
        index++;
        if (current.data === data)
            return index;
        current = current.next;
    }
    return -1;
}

// function to find element at a given index;
LinkedList.prototype.elementAt = function(index) {
    var current = this.head;
    var counter = 0;
    while (current) {
        if (counter === index) {
            return current.data;
        }
        current = current.next;
        counter++;
    }
    return null;
}

// function to add element at a given index;
LinkedList.prototype.addAt = function(data, index) {
    index--;
    var newNode = new Node(data);
    var current = this.head;
    var counter = 0;
    if (index > this.length)
        throw new Error("index is out of range");
    while (counter < index) {
        counter++;
        current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.length++;
}
var list = new LinkedList();
list.addFirst(100);
list.addFirst(200);
list.addFirst(300);
list.addFirst(400);
list.addFirst(500);
// console.log(list.indexOf(300))

// console.log(list.elementAt(0));
// console.log(list.elementAt(2));
// console.log(list.elementAt(3));