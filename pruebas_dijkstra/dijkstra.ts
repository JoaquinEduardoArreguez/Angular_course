class GraphNode{
    nombre:string;
    destinationNodes:GraphNode[];
    constructor(nombre:string,destinationNodes:GraphNode[]){
        this.nombre=nombre;
        this.destinationNodes=destinationNodes;
    }
}