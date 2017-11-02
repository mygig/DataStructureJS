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

var log = function(value) {
    console.log(value);
};

var bst = new BST(50);
bst.insert(10);
bst.insert(30);
bst.insert(20);
bst.insert(44);
bst.insert(70);

bst.depthFirstTraversal(log, 'inorder');