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
}
