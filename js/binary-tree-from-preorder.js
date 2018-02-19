(function(){

  /*Given preorder traversal of a binary search tree, construct the BST.
  Also calculate the sum of height of each node i.e. total height*/

  function Node(data){
    this.data = data;
    this.left = null;
    this.right = null;
    this.height = 0;
  }
  let totalHt = 0;
  function constructBST(arr,low,high){
    if(low > high || typeof arr == 'undefined' || arr.length == 0){
      return null;
    }
    let root = new Node(arr[low]);
    if(low == high){
      return root;
    }
    low = low + 1;
    let pos = low;
    while(arr[pos] < root.data){
      pos = pos+1;
    }
    root.left = constructBST(arr,low,pos-1);
    root.right = constructBST(arr,pos,high);

    let lh = root.left ? root.left.height : 0;
    let rh = root.right ? root.right.height : 0;
    root.height = Math.max(lh,rh) + 1;
    totalHt += root.height;
    return root;
  }

  let tree = null;
  let input = [500 400 300 450 425 475 600 550];
  tree = constructBST(input, 0, input.length-1);
  console.log("total height: "+totalHt);

})();
