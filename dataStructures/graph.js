const BaseNode = require('./baseNode.js');

class Vertex extends BaseNode {
  constructor(id) {
    super(id);
    this.edges = {};
  }
}

let newV = new Vertex(3);
console.log(newV)

class Graph {
  constructor() {
    this.vertices = {};
    this.totalVertices = 0;
    this.totalEdges = 0;
  }

  addVertex(id) {
    if (this.vertices[id] === undefined) {
      this.vertices[id] = new Vertex(id);
      this.totalVertices++;
    }
  }

  getVertex(id) {
    if (this.vertices[id] !== undefined) {
      return this.vertices[id];
    } else {
      console.log('id does not exist');
    }
  }

  addEdge(id1, id2) {
    if (this.vertices[id1] !== undefined && this.vertices[id2] !== undefined) {
      if(this.vertices[id1].edges[id2] === undefined && this.vertices[id2].edges[id1] === undefined) {
        this.vertices[id1].edges[id2] = id2;
        this.vertices[id2].edges[id1] = id1;
        this.totalEdges++;
      } else {
        console.log('edge already exists!');
      }
    } else {
      console.log('either vertex or both do not exists!');
    }
  }

  removeEdge(id1, id2) {
    if (this.vertices[id1] !== undefined && this.vertices[id2] !== undefined) {
      if(this.vertices[id1].edges[id2] !== undefined && this.vertices[id2].edges[id1] !== undefined) {
        delete this.vertices[id1].edges[id2];
        delete this.vertices[id2].edges[id1];
        this.totalEdges--;
      } else {
        console.log('edge does not exist!');
      }
    } else {
      console.log('either vertex or both do not exists!');
    }
  }

  removeVertex(id) {
    if (this.vertices[id] !== undefined) {
      let toDelete = this.vertices[id];
      for (let edge in toDelete.edges) {
        this.removeEdge(id, edge);
      }
      delete this.vertices[id];
      this.totalVertices--;
    } else {
      console.log("vertex does not exist!");
    }
  }

  findNeighbors(id) {
    let neighbors = [];
    if (this.vertices[id] !== undefined) {
      for(let edge in this.vertices[id].edges) {
        neighbors.push(edge);
      }
      return neighbors;
    } else {
      console.log("ID of vertex does not exit");
    }
  }

  forEachNode(cb){
    for(vertexId in this.vertices) {
      cb(this.vertices[vertexId]);
    }
  }
}

/** traversal methods **/
const Queue = require('./queue.js').Queue;
const Stack = require('./stack.js').Stack;

Graph.prototype.breadthFirstSearch = function(id) {
  const result = [],
        queue = new Queue(),
        travelled = {};

  queue.enqueue(this.vertices[id]);
  travelled[id] = true;

  while(queue.size() > 0) {
    let currentNode = queue.dequeue();

    for (let edge in currentNode.edges) {
      if (!travelled[edge]) {
        queue.enqueue(this.vertices[edge]);
        travelled[edge] = true;
      }
    }
    result.push(currentNode.value);
  }
  return result;
}


Graph.prototype.depthFirstSearch = function(id) {
  const result = [],
        stack = new Stack(),
        travelled = {};

  stack.push(this.vertices[id]);
  travelled[id] = true;

  while(stack.length > 0) {
    let currentNode = stack.pop();
    for (let edge in currentNode.edges) {
      if(!travelled[edge]) {
        stack.push(this.vertices[edge]);
        travelled[edge] = true;
      }
    }
    result.push(currentNode.value);
  }
  return result;
}

module.exports.Vertex = Vertex;
module.exports.Graph = Graph;
