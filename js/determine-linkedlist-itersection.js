/*
  Given 2 singly linked lists, determine if two lists intersect. Return the intersecting node. OIntersection is based on node reference not value.
*/

console.log("------------ Find intersection point of 2 linkedlists");
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
  LinkedList.prototype.addNode = function(node){
    if(this.head==null){
      this.head = node;
    }else{
      let curNode = this.head;
      while(curNode.next!=null){
        curNode = curNode.next;
      }
      curNode.next = node;
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

  function findIntersection(list1,list2){
    if(!list1 || !list2){
      console.log("empty input found");
      return;
    }

    let len1 = 1;
    let len2 = 1;
    let head1 = list1;
    let head2 = list2;
    while(head1.next != null){
      head1 = head1.next;
      len1++;
    }
    while(head2.next != null){
      head2 = head2.next;
      len2++;
    }
    if(head1 != head2){
      console.log("No intersection");
      return;
    }
    console.log(list2);
    if(len1>len2){
      list1 = forwardList(list1, len1-len2);
    }else if(len1<len2){
      list2 = forwardList(list2, len2-len1);
    }
    function forwardList(list, count){
      while(count!=0){
        list = list.next;
        count--;
      }
      return list;
    }

    while(list1 != list2){
      list1=list1.next;
      list2=list2.next;
      console.log(list2.data);
    }
    console.log("Intersecting node value:"+list1.data);


  }

  let list1 = new LinkedList();
  list1.add("16");
  list1.add("15");
  list1.add("12");
  list1.add("13");
  list1.print();

  let list2 = new LinkedList();
  list2.add("6");
  list2.add("5");
  list2.add("3");
  list2.add("8");
  list2.add("1");
  list2.add("4");
  list2.addNode(list1.head.next.next);
  list2.print();

  findIntersection(list1.head,list2.head);


})();
