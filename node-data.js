//set up class
class LinkedListNode {
  //set up info associated with this node
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  //add node
  add(node) {
    //takes in a node
    // if there is no next, node it takes in becomes next
    if (!this.left) {
      this.right = node;
    } else {
      //if there is next
      //delegate to the current next
      this.left.add(node);
    }
  }
}
const B = new LinkedListNode('B');
const A = new LinkedListNode('A');
const C = new LinkedListNode('C');
const D = new LinkedListNode('D');

// B will be the root of the tree:
B.add(A);
B.add(D);
B.add(C);
