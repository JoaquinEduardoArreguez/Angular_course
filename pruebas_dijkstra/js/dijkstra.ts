/**
 * Three module to get graphics up and running
 */

// import * as THREE from 'three';

// Reference to div containing our scene.
// const container = document.querySelector('#scene-container');

// Create a Scene
// const scene = new THREE.Scene();

// Set scene's background color
// Can be any of the CSS color names.
// scene.background = new THREE.Color('skyblue');


/**
 * Node on weighted graph.
 */
class GraphNode {
    nombre : string;
    outgoingLinks : GraphLink[];
    constructor(nombre : string) {
        this.nombre = nombre;
        this.outgoingLinks = []; // Initialized as empty, to be filled if necessary.
    }
    addLinks(outgoingLinks : GraphLink[]) {
        this.outgoingLinks = outgoingLinks;
    }

    createLink(destinationNode : GraphNode, distance : number) {
        this.outgoingLinks.push(new GraphLink(destinationNode, distance));
    }

    info() {
        console.log(`
        GraphNode Info: ${
            this.nombre
        }
        Outgoing Links : ${
            this.outgoingLinks.length
        }
        `);
        this.outgoingLinks.forEach(Element => Element.info());
        console.log(`End of ${
            this.nombre
        } info.-----------------------`);
    }
}

/**
 * Link on weighted graph.
 */
class GraphLink {
    distance : number;
    destinationNode : GraphNode;
    constructor(destinationNode : GraphNode, distance : number) {
        this.distance = distance;
        this.destinationNode = destinationNode;
    }
    info() {
        console.log(`
        ->Link to ${
            this.destinationNode.nombre
        } distance ${
            this.distance
        }`);
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

/**
 * Priority Queue to follow dijkstra's algorithm, it will contain all visited GraphNodes with their distance to starting node.
 * As an element for the Queue, we can use GraphLink(s) an they have all required data on them, a destinationNode and a distance.
 */

class PriorityQueue {
    queue : GraphLink[];
    constructor(baseQueue? : GraphLink[]) {
        if (baseQueue) {
            this.queue = baseQueue;
        } else {
            this.queue = [];
        }
    }

    add(graphLink : GraphLink | GraphLink[]) { // graphLink.array.forEach(element => {});
        this.queue = this.queue.concat(graphLink);
        // this.queue.filter(Element=>JSON.stringify())
        this.queue.sort((a, b) => a.distance - b.distance);
    }

    info() {
        console.log(`
        Priority Queue Info
        Elements:    ${
            this.queue.length
        }
        `);
        this.queue.forEach(Element => Element.info());
    }
}

let _priorityQ = new PriorityQueue();

function dijkstra(initialNode : GraphNode): void {
    _priorityQ.add(new GraphLink(initialNode, 0));

    while (_priorityQ.queue.length) {
        let actualNode = _priorityQ.queue.shift();
        actualNode ?.info();
    }
}

dijkstra(C);
