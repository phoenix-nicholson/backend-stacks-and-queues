//set up class
class LinkedListNode {
  //set up info associated with this node
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  //add node
  add(node) {
    //takes in a node
    // if there is no next, node it takes in becomes next
    if (!this.next) {
      this.next = node;
    } else {
      //if there is next
      //delegate to the current next
      this.next.add(node);
    }
  }
}
const root = new LinkedListNode('A');
const nodeB = new LinkedListNode('B');
root.add(nodeB);
// console.log(root.getList()); // 'A B'
const nodeC = new LinkedListNode('C');
const nodeD = new LinkedListNode('D');
const nodeE = new LinkedListNode('E');
root.add(nodeC);
root.add(nodeD);
root.add(nodeE);
// console.log(root.getList()); // 'A B C D E'

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    if (node.value === this.value) {
      if (!this.left) this.left = node;
    } else {
      if (!this.right) this.right = node;
      else this.right.add(node);
    }
  }
}
