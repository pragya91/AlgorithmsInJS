(function(){
  function Node(data){
    this.data = data;
    this.next=null;
  }
  function LinkedList(){
    this.head = null;
  }
  LinkedList.prototype.add = function(data){
    let newNode = new Node(data);
    if(this.head==null){
      this.head = newNode;
    }else{
      let curNode = this.head;
      while(curNode.next!=null){
        curNode = curNode.next;
      }
      curNode.next = newNode;
    }
  }
  LinkedList.prototype.print = function(){
    if(this.head!=null){
      let curNode = this.head;
      let arr = [];
      while(curNode!=null){
        arr.push(curNode.data);
        curNode = curNode.next;
      }
      console.log(arr.join(" -> "));
    }
  }

  /* wrote a code to partition linkedlist around  value x, such that all nodes less thanx comebefore all nodes greater than or equal to x. If x is contained in the list, the values of x only need to beafter the elements less than x. The partition element x can appear anywhre in the right partition
  Input: 3->5->8->5->10->2->1
  output: 3->1->2->10->5->5->8
  */

  console.log("----------partition linked list-------")
  function partition(list,k){
    if(list.head == null){
      return;
    }
    let head = list.head;
    let prev = list.head;
    let cur = list.head;
    while(cur!=null){
      let next = cur.next;
      if(cur.data < k && cur!=list.head){
        prev.next = cur.next;
        cur.next = head;
        head = cur;
      }else{
        prev = cur;
      }
      cur=next;
    }
    list.head = head;
    list.print();
  }
  let list = new LinkedList();
  list.add("4");
  list.add("3");
  list.add("1");
  list.add("5");
  list.add("4");
  list.add("4");
  list.add("1");
  list.print();
  partition(list,4);

})();
