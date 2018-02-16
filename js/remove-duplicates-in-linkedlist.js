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

  console.log("----------remove duplicates from a linked list-------")
  function removeDuplicates(list){
    let visited = new Map();
    let prev = list.head;
    let cur = prev.next;
    visited.set(prev.data,true);
    while(cur!=null){
      if(visited.has(cur.data)){
        prev.next = cur.next;
      }else{
        visited.set(cur.data,true);
        prev = prev.next;
      }
      cur = cur.next;
    }
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
  removeDuplicates(list);
})();
