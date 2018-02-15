(function(){

  /* Heaps in JS. Binary Heap is implemented using arrays*/
  console.log("----------Heap in JS----------");
  function MinHeap(arr){
    this.heapArray = arr;
    this.size = arr.length;
  }
  MinHeap.prototype.parent = (i)=>(i-1)/2;
  MinHeap.prototype.leftChild = (i)=>i*2+1;
  MinHeap.prototype.rightChild = (i)=>i*2+2;
  MinHeap.prototype.swap = function(i,j){
    let temp = this.heapArray[i];
    this.heapArray[i] = this.heapArray[j];
    this.heapArray[j] = temp;
  };
  MinHeap.prototype.extractMin = function(){
    let root;
    if(this.size!=0){
      root = this.heapArray[0];
    }
    if(this.size!=1){
      this.heapArray[0] = this.heapArray[this.size-1];
      this.heapArray.pop();
      this.size--;
      this.heapify(0);
    }
    return root;
  };
  MinHeap.prototype.heapify = function(i){
    let left = this.leftChild(i);
    let right = this.rightChild(i);
    let smallest = i;
    if(this.heapArray[left] < this.heapArray[i] && left < this.size){
      smallest = left;
    }
    if(this.heapArray[right] < this.heapArray[smallest] && right < this.size){
      smallest = right;
    }
    if(smallest!=i){
      this.swap(i,smallest);
      this.heapify(smallest);
    }
  };
  MinHeap.prototype.decreaseKey = function(i,newVal){
    this.heapArray[i] = newVal;
    while(this.heapArray[i] < this.heapArray[this.parent(i)] && i>0){
      this.swap(i,this.parent(i));
      i = this.parent(i);
    }
  };
  MinHeap.prototype.deleteKey = function(i){
    this.decreaseKey(i, Number.MIN_SAFE_INTEGER);
    this.extractMin();
  };
  MinHeap.prototype.insertKey = function(val){
    this.heapArray.push(val);
    this.size++;
    let i = this.size-1;
    while(this.heapArray[this.parent(i)] > this.heapArray[i] && i>0){
      this.swap(i,this.parent(i));
      i = this.parent(i);
    }
  };

  var heap = new MinHeap([]);

  heap.insertKey(3);
  console.log(heap.heapArray);
  heap.insertKey(2);
  console.log(heap.heapArray);
  heap.deleteKey(1);
  console.log(heap.heapArray);
  heap.insertKey(15);
  console.log(heap.heapArray);
  heap.insertKey(5);
  console.log(heap.heapArray);
  heap.insertKey(4);
  console.log(heap.heapArray);
  heap.insertKey(45);
  console.log(heap.heapArray);




})();
