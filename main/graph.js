class Vertex {
  constructor(id) {
    this.value = id;
    this.edges = {};
  }
}

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
  addEdge(id) {
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
  findNeighbor(id) {
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
}
