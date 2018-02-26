/* Implement a function to check if a binraytree is balanced. For the purpose of this question, a binray tree is balaned if the heights of the two subtrees of the node never differ by more than one.*/

(function(){
  console.log("--------is binray tree balanced -----");
  function Node(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
  function BinaryTree(node){
    this.root = node;
  }

  /* Method 1: Calculating heights of left and right children for every node in the tree, and checking the result. The drawback of this algorithm is, the getHeight is called for multiple times for the same node.*/
  function getHeight(node){
    if(node == null)
      return 0;
    else {
      return Math.max(getHeight(node.left),getHeight(node.right)) + 1;
    }
  }
  function isBalanced(root){
    if(root == null){
      return true;
    }
    let lh = getHeight(root.left);
    let rh = getHeight(root.right);

    if(Math.abs(lh-rh) > 1){
      return false;
    }else{
      return (isBalanced(root.left) && isBalanced(root.right));
    }
  }

  /* Method 2: */
  let BREAK_POINT = -1000;
  function checkHeight(node){
    if(node==null){
      return 0;
    }
    let lh = checkHeight(node.left);
    if(lh==BREAK_POINT){
      return BREAK_POINT;
    }
    let rh = checkHeight(node.right);
    if(rh==BREAK_POINT){
      return BREAK_POINT;
    }
    if(Math.abs(lh-rh)>1){
      return BREAK_POINT;
    }else{
      return Math.max(lh,rh)+1;
    }

  }
  function isBalanced2(root){
    if(root == null){
      return true;
    }
    if(checkHeight(root)==BREAK_POINT){
      return false;
    }else{
      return true;
    }
  }


  let tree = new BinaryTree(new Node("15"));
  tree.root.left = new Node(10);
  tree.root.right = new Node(20);
  tree.root.left.right = new Node(12);
  tree.root.left.right.left = new Node(11);
  console.log("is tree balanced (method 1): "+isBalanced(tree.root));
  console.log("is tree balanced (method 2): "+isBalanced2(tree.root));
})();
