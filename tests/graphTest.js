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
      expect(graph.vertices['Heroes vs. Villains']).to.equal(undefined);

      graph.addVertex('Heroes vs. Villains');
      expect(graph.vertices['Heroes vs. Villains'].value).to.equal('Heroes vs. Villains');
      expect(graph.totalVertices).to.equal(1);
    })

    it('should add two vertices', function(){
      const graph = new test.Graph();
      expect(graph.vertices['Heroes vs. Villains']).to.equal(undefined);

      graph.addVertex('Heroes vs. Villains');
      expect(graph.vertices['Heroes vs. Villains'].value).to.equal('Heroes vs. Villains');
      expect(graph.totalVertices).to.equal(1);

      graph.addVertex('Blood vs. Water');
      expect(graph.vertices['Blood vs. Water'].value).to.equal('Blood vs. Water');
      expect(graph.totalVertices).to.equal(2);
    });

    it('should not increase the totalVertices count when the vertex already exists', function(){
      const graph = new test.Graph();
      expect(graph.vertices['Samoa']).to.equal(undefined);

      graph.addVertex('Samoa');
      expect(graph.vertices['Samoa'].value).to.equal('Samoa');
      expect(graph.totalVertices).to.equal(1);

      graph.addVertex('Samoa');
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

  describe('graph removeVertex method', function(){
    it('should remove a vertex when deleted', function(){
      const graph = new test.Graph();

      graph.addVertex('Second Chance');
      expect(graph.vertices['Second Chance'].value).to.equal('Second Chance');
      expect(graph.totalVertices).to.equal(1);

      graph.removeVertex('Second Chance');
      expect(graph.vertices['Second Chance']).to.equal(undefined);
    });
  });

  describe('graph addEdge method', function(){
    it('should create an edge between two vertices', function(){
      const graph = new test.Graph();

      graph.addVertex('Kaoh Rong');
      graph.addVertex('Worlds Apart');

      graph.addEdge('Kaoh Rong', 'Worlds Apart');

      expect(graph.vertices['Kaoh Rong'].edges['Worlds Apart']).to.equal('Worlds Apart');
      expect(graph.vertices['Worlds Apart'].edges['Kaoh Rong']).to.equal('Kaoh Rong');
    });
  });

  describe('graph removeEdge method', function(){
    it('should remove an edge between two vertices', function(){
      const graph = new test.Graph();

      graph.addVertex('San Juan Del Sur');
      graph.addVertex('Cagayan');

      graph.addEdge('San Juan Del Sur', 'Cagayan');

      expect(graph.vertices['San Juan Del Sur'].edges['Cagayan']).to.equal('Cagayan');
      expect(graph.vertices['Cagayan'].edges['San Juan Del Sur']).to.equal('San Juan Del Sur');

      graph.removeEdge('San Juan Del Sur', 'Cagayan');
      expect(graph.vertices['San Juan Del Sur'].edges['Cagayan']).to.equal(undefined);
      expect(graph.vertices['Cagayan'].edges['San Juan Del Sur']).to.equal(undefined);
      expect(graph.totalEdges).to.equal(0);
    });
  });

  describe('graph findNeighbors method', function(){
    it("should return an array of the neighbors' IDs", function(){
      const graph = new test.Graph();

      graph.addVertex('Caramoan');
      graph.addVertex('Philippines');
      graph.addVertex('South Pacific');
      graph.addVertex('Redemption Island');

      graph.addEdge('Caramoan', 'Philippines');
      graph.addEdge('Caramoan', 'South Pacific');

      expect(graph.vertices['Caramoan'].edges['Philippines']).to.equal('Philippines');
      expect(graph.vertices['Philippines'].edges['Caramoan']).to.equal('Caramoan');
      expect(graph.vertices['Caramoan'].edges['South Pacific']).to.equal('South Pacific');
      expect(graph.vertices['South Pacific'].edges['Caramoan']).to.equal('Caramoan');

      const result = graph.findNeighbors('Caramoan');
      expect(result).to.include('Philippines');
      expect(result).to.include('South Pacific');
    })

    it("should return an empty array when there's no edges", function(){
      const graph = new test.Graph();

      graph.addVertex('Caramoan');
      graph.addVertex('Philippines');
      graph.addVertex('South Pacific');
      graph.addVertex('Redemption Island');

      graph.addEdge('Caramoan', 'Philippines');
      graph.addEdge('Caramoan', 'South Pacific');

      const result = graph.findNeighbors('Redemption Island');
      expect(result.length).to.equal(0);
    })
  })

})
