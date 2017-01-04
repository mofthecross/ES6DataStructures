const expect = require('chai').expect;
const test = require('../main/Graph.js');


describe('graph class', function(){
  describe('vertex class', function(){
    it('should instantiate a Vertex class', function() {
      expect(new test.Vertex).to.be.an('object');
      expect(new test.Vertex).to.be.an.instanceof(test.Vertex);
    });
  });

  describe('graph properties', function(){
    it('should have properties vertices, totalVertices, and totalEdges', function(){
      const graph = new test.Graph();

      expect(graph).to.have.property('vertices');
      expect(graph).to.have.property('totalVertices');
      expect(graph).to.have.property('totalEdges');
      expect(graph.totalVertices).to.equal(0);
      expect(graph.totalEdges).to.equal(0);
    });
  });

  describe('graph methods existence', function(){
    it('should have methods addVertex, getVertex, removeVertex, addEdge, removeEdge, findNeighbors, and forEachNode', function(){
      const graph = new test.Graph();

      expect(graph).to.respondTo('addVertex');
      expect(graph).to.respondTo('getVertex');
      expect(graph).to.respondTo('removeVertex');
      expect(graph).to.respondTo('addEdge');
      expect(graph).to.respondTo('removeEdge');
      expect(graph).to.respondTo('findNeighbors');
      expect(graph).to.respondTo('forEachNode');
    })
  })
  //
  // describe('graph addVertex method', function(){
  //   it('should add a single vertex', function(){
  //     const test = new Graph();
  //     expect(test.vertices['hello']).to.equal(undefined);
  //
  //     test.addVertex('hello');
  //     expect(test.vertices['hello'].value).to.equal('hello');
  //     expect(test.totalVertices).to.equal(1);
  //   })
  //
  //   it('should add two vertices', function(){
  //     const test = new Graph();
  //     expect(test.vertices['hello']).to.equal(undefined);
  //
  //     test.addVertex('hello');
  //     expect(test.vertices['hello'].value).to.equal('hello');
  //     expect(test.totalVertices).to.equal(1);
  //
  //     test.addVertex('good');
  //     expect(test.vertices['good'].value).to.equal('good');
  //     expect(test.totalVertices).to.equal(2);
  //   })
  //
  //   it('should not increase the totalVertices count when the vertex already exists', function(){
  //     const test = new Graph();
  //     expect(test.vertices['hello']).to.equal(undefined);
  //
  //     test.addVertex('hello');
  //     expect(test.vertices['hello'].value).to.equal('hello');
  //     expect(test.totalVertices).to.equal(1);
  //
  //     test.addVertex('hello');
  //     expect(test.totalVertices).to.equal(1);
  //   })
  // })
  //
  // describe('graph getVertex method', function(){
  //   it('should return the entire vertex of the queried ID', function(){
  //     const test = new Graph();
  //
  //     test.addVertex('hello');
  //     const result = test.getVertex('hello');
  //
  //     expect(result.value).to.equal('hello');
  //     expect(result).to.have.property('value');
  //     expect(result).to.have.property('edges');
  //   })
  //
  //   it('should return undefined when the vertex ID doesn not exist', function(){
  //     const test = new Graph();
  //
  //     const result = test.getVertex('notHere');
  //
  //     expect(result).to.equal(undefined);
  //   })
  // })
  //
  // describe('graph removeVertex method', function(){
  //   it('should remove a vertex when deleted', function(){
  //     const test = new Graph();
  //
  //     test.addVertex('hello');
  //     expect(test.vertices['hello'].value).to.equal('hello');
  //     expect(test.totalVertices).to.equal(1);
  //
  //     test.removeVertex('hello');
  //     expect(test.vertices['hello']).to.equal(undefined);
  //   })
  // })
  //
  // describe('graph addEdge method', function(){
  //   it('should create an edge between two vertices', function(){
  //     const test = new Graph();
  //
  //     test.addVertex('hello');
  //     test.addVertex('goodbye');
  //
  //     test.addEdge('hello', 'goodbye');
  //
  //     expect(test.vertices['hello'].edges['goodbye']).to.equal('goodbye');
  //     expect(test.vertices['goodbye'].edges['hello']).to.equal('hello');
  //   })
  //
  //   it('should increase the edge counter', function(){
  //     const test = new Graph();
  //
  //     test.addVertex('hello');
  //     test.addVertex('goodbye');
  //
  //     test.addEdge('hello', 'goodbye');
  //     expect(test.totalEdges).to.equal(1);
  //   })
  // })
  //
  // describe('graph removeEdge method', function(){
  //   it('should remove an edge between two vertices', function(){
  //     const test = new Graph();
  //
  //     test.addVertex('hello');
  //     test.addVertex('goodbye');
  //
  //     test.addEdge('hello', 'goodbye');
  //
  //     expect(test.vertices['hello'].edges['goodbye']).to.equal('goodbye');
  //     expect(test.vertices['goodbye'].edges['hello']).to.equal('hello');
  //
  //     test.removeEdge('hello', 'goodbye');
  //     expect(test.vertices['hello'].edges['goodbye']).to.equal(undefined);
  //     expect(test.vertices['goodbye'].edges['hello']).to.equal(undefined);
  //     expect(test.totalEdges).to.equal(0);
  //   })
  //   it('should not decrease the totalEdges counter when an edge does not exist between two vertices', function(){
  //     const test = new Graph();
  //
  //     test.addVertex('hello');
  //     test.addVertex('goodbye');
  //     test.addVertex('blah');
  //
  //     test.addEdge('hello', 'goodbye');
  //
  //     expect(test.vertices['hello'].edges['goodbye']).to.equal('goodbye');
  //     expect(test.vertices['goodbye'].edges['hello']).to.equal('hello');
  //
  //     test.removeEdge('hello', 'blah');
  //     expect(test.totalEdges).to.equal(1);
  //   })
  // })
  //
  // describe('graph findNeighbors method', function(){
  //   it("should return an array of the neighbors' IDs", function(){
  //     const test = new Graph();
  //
  //     test.addVertex('hello');
  //     test.addVertex('goodbye');
  //     test.addVertex('blah');
  //     test.addVertex('haha');
  //
  //     test.addEdge('hello', 'goodbye');
  //     test.addEdge('hello', 'blah');
  //
  //     expect(test.vertices['hello'].edges['goodbye']).to.equal('goodbye');
  //     expect(test.vertices['goodbye'].edges['hello']).to.equal('hello');
  //     expect(test.vertices['hello'].edges['blah']).to.equal('blah');
  //     expect(test.vertices['blah'].edges['hello']).to.equal('hello');
  //
  //     const result = test.findNeighbors('hello');
  //     expect(result).to.include('goodbye');
  //     expect(result).to.include('blah');
  //   })
  //
  //   it("should return an empty array when there's no edges", function(){
  //     const test = new Graph();
  //
  //     test.addVertex('hello');
  //     test.addVertex('goodbye');
  //     test.addVertex('blah');
  //     test.addVertex('haha');
  //
  //     test.addEdge('hello', 'goodbye');
  //     test.addEdge('hello', 'blah');
  //
  //     const result = test.findNeighbors('haha');
  //     expect(result.length).to.equal(0);
  //   })
  // })
  //
  // describe('graph forEachNode method', function(){
  //   it('should perform the callback on all of the nodes', function(){
  //     // insert test here
  //   })
  // })
})
