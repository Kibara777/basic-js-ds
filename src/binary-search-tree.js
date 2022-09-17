const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');


class BinarySearchTree {
  constructor() {
    this.base = null;
  }

  root() {
    return this.base;
  }

  add(data) {
    const aNewNode = new Node(data);
    if (this.base === null) this.base = aNewNode;
    else this.addNode(this.base, aNewNode);
  }

  addNode(node, aNewNode) {
    if (aNewNode.data < node.data) {
      if (node.left === null) {
        node.left = aNewNode;

      } 
      else {
        this.addNode(node.left, aNewNode);
      }

    } 
    else {
      if (node.right === null) {
        node.right = aNewNode;
      } 
      else {
        this.addNode(node.right, aNewNode);
      }
    }
  }

  search(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) return this.search(node.left, data);
    else if (data > node.data) return this.search(node.right, data);
    else return node;
  }

  has(data) {
    return this.search(this.base, data) === null ? false : true;
  }

  find(data) {
    return this.search(this.base, data);
  }

  findMin(node) {
    if (node.left === null) return node;
    return this.findMin(node.left);
  }

  remove(data) {
    this.removeNode(this.base, data);
  }

  removeNode(node, data) {
    if (node === null) return null;
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;

    }
    
    if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }

    if (data === node.data) {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      }
      if (node.right === null) {
        node = node.left;
        return node;
      }

      const newNode = this.findMin(node.right);
      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      return node;
    }
  }

  min() {
    return this.findMin(this.base).data;
  }
  max() {
    return findMax(this.base).data;
    function findMax(node) {
      if (node.right === null) return node;
      return findMax(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree,
};