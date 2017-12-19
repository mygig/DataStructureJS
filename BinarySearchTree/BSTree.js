// constructor function 
function BST(value) {
    this.value = value || 50;
    this.left = null;
    this.right = null;
}
// insert method
BST.prototype.insert = function(value) {
    if (value < this.value) {
        if (!this.left) {
            this.left = new BST(value);
        } else this.left.insert(value);
    } else if (value > this.value) {
        if (!this.right) {
            this.right = new BST(value);
        } else this.right.insert(value);
    }
}

// contains method
BST.prototype.contains = function(value) {
    if (value === this.value) {
        return true;
    } else if (value < this.value) {
        if (!this.left)
            return false;
        else
            return this.left.contains(value);
    } else if (value > this.value) {
        if (!this.right)
            return false;
        else
            return this.right.contains(value);
    }
}

// depth first traversel of bst
// http://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
    if (order === 'preorder')
        iteratorFunc(this.value);
    if (this.left)
        this.left.depthFirstTraversal(iteratorFunc, order);
    if (order === 'inorder')
        iteratorFunc(this.value);
    if (this.right)
        this.right.depthFirstTraversal(iteratorFunc, order);
    if (order === 'postorder')
        iteratorFunc(this.value);
}

// breadth first traveral 
BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
    // define a queue using array
    // this refers to the current node.
    var queue = [this];
    while (queue.length) {
        var treeNode = queue.shift();
        iteratorFunc(treeNode);
        if (treeNode.left) queue.push(treeNode.left);
        if (treeNode.right) queue.push(treeNode.right);
    }
}

var logDFS = function(value) {
    console.log(value);
};

var logBFS = function(node) {
    console.log(node.value);
};
var bst = new BST(50);
bst.insert(10);
bst.insert(30);
bst.insert(20);
bst.insert(44);
bst.insert(70);

// bst.depthFirstTraversal(logDFS, 'inorder');
bst.breadthFirstTraversal(logBFS);