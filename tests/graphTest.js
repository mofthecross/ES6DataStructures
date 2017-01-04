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
    });
  });

  describe('graph addVertex method', function(){
    it('should add a single vertex', function(){
      const graph = new test.Graph();
      expect(graph.vertices['mofthecross']).to.equal(undefined);

      graph.addVertex('mofthecross');
      expect(graph.vertices['mofthecross'].value).to.equal('mofthecross');
      expect(graph.totalVertices).to.equal(1);
    })

    it('should add two vertices', function(){
      const graph = new test.Graph();
      expect(graph.vertices['mofthecross']).to.equal(undefined);

      graph.addVertex('mofthecross');
      expect(graph.vertices['mofthecross'].value).to.equal('mofthecross');
      expect(graph.totalVertices).to.equal(1);

      graph.addVertex('good');
      expect(graph.vertices['good'].value).to.equal('good');
      expect(graph.totalVertices).to.equal(2);
    });

    it('should not increase the totalVertices count when the vertex already exists', function(){
      const graph = new test.Graph();
      expect(graph.vertices['mofthecross']).to.equal(undefined);

      graph.addVertex('mofthecross');
      expect(graph.vertices['mofthecross'].value).to.equal('mofthecross');
      expect(graph.totalVertices).to.equal(1);

      graph.addVertex('mofthecross');
      expect(graph.totalVertices).to.equal(1);
    });
  });

  describe('graph getVertex method', function(){
    it('should return the entire vertex of the queried ID', function(){
      const graph = new test.Graph();

      graph.addVertex('MvGx');
      const result = graph.getVertex('MvGx');

      expect(result.value).to.equal('MvGx');
      expect(result).to.have.property('value');
      expect(result).to.have.property('edges');
    })

    it('should return undefined when the vertex ID doesn not exist', function(){
      const graph = new test.Graph();
      const result = graph.getVertex('notHere');
      expect(result).to.equal(undefined);
    });
  });



});
