/* Given a directed graph, design an algorithm to find out whether there is a route between two nodes*/

(function(){
  console.log("--------Does route exist between 2 nodes in a graph -----");
  function Graph(count){
    this.vCount=count;
    this.adj=[];
  }
  Graph.prototype.addEdge = function(v,u){
    if(!this.adj[v]){
      this.adj[v] = [];
    }
    this.adj[v].push(u);
  };
  Graph.prototype.print = function(){
    for(let i=0;i<this.adj.length;i++){
      console.log(i +" adjescents are: "+this.adj[i]);
    }
  };

  function doesARouteExist(g,u,v){
    let visited = new Map();
    let queue = g.adj[u];
    while(queue.length>0){
      let cur = queue.shift();
      if(cur == v){
        console.log("route exists");
        return;
      }else{
        if(!visited.has(cur)){
          queue = queue.concat(g.adj[cur]);
          visited.set(cur,true);
        }
      }
    }
    console.log("route does not exist");
  }

  let g = new Graph(4);
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 2);
        g.addEdge(2, 0);
        g.addEdge(2, 3);
        g.addEdge(3, 3);
        g.print();
        doesARouteExist(g,3,0);
})();
