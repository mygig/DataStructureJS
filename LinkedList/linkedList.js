// implementation of linked list

// constructor function for linked list 
function LinkedList() {
    this.head = null;
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

}