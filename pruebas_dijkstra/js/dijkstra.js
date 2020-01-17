"use strict";
/**
 * Node on weighted graph.
 */
class GraphNode {
    constructor(nombre) {
        this.nombre = nombre;
        this.outgoingLinks = []; // Initialized as empty, to be filled if necessary.
    }
    addLinks(outgoingLinks) {
        this.outgoingLinks = outgoingLinks;
    }
    createLink(destinationNode, distance) {
        this.outgoingLinks.push(new GraphLink(destinationNode, distance));
    }
    info() {
        console.log(`
        GraphNode Info: ${this.nombre}
        Outgoing Links : ${this.outgoingLinks.length}
        `);
        this.outgoingLinks.forEach(Element => Element.info());
        console.log(`End of ${this.nombre} info.-----------------------`);
    }
}
/**
 * Link on weighted graph.
 */
class GraphLink {
    constructor(destinationNode, distance) {
        this.distance = distance;
        this.destinationNode = destinationNode;
    }
    info() {
        console.log(`
        ->Link to ${this.destinationNode.nombre} distance ${this.distance}`);
    }
}
/*
let A = new GraphNode("A");
let B = new GraphNode("B");*/
let C = new GraphNode("C");
let D = new GraphNode("D");
let E = new GraphNode("E");
let F = new GraphNode("F");
// C links to E and D with 33 and 20 distances respectively.
C.createLink(E, 33);
C.createLink(D, 20);
// D links with E and F with 20 and 2 distances respectively.
D.createLink(E, 20);
D.createLink(F, 2);
E.createLink(F, 1);
// F has no outgoing links
let _priorityQ = new PriorityQueue();
function dijkstra(initialNode) {
    var _a;
    _priorityQ.add(new GraphLink(initialNode, 0));
    while (_priorityQ.queue.length) {
        let actualNode = _priorityQ.queue.shift();
        (_a = actualNode) === null || _a === void 0 ? void 0 : _a.info();
    }
}
dijkstra(C);
