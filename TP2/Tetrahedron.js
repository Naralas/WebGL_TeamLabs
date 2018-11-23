class Tetrahedron extends SolidShape {
  constructor(vertices, indices, colors, width=1.0, center={x:1.0, y:1.0, z:1.0}, color={r:1.0, g:1.0, b:1.0, a:1.0}) {
    super(vertices, indices, colors, center, color, 4, 12);

    this.width = width;

    this.setVertices();
    this.setIndices();
    this.setColors();
    super.setNormals();
  }

  setVertices(hasBeenInitialized=false) {
    let R = this.width/Math.sqrt(3);
    let r = R/2;
    this.vertices.splice(this.verticesOffset, // index
                         hasBeenInitialized ? this.numberVertices*3 : 0, // number of elements to remove before pushing
                         this.center.x - (this.width/2), this.center.y - r, this.center.z - r,  // P0
                         this.center.x + (this.width/2), this.center.y - r, this.center.z - r,  // P1
                         this.center.x,                  this.center.y - r, this.center.z + R,  // P2
                         this.center.x,                  this.center.y + R, this.center.z       // P3
                      );
  }

  setIndices(hasBeenInitialized=false) {
    this.indices.splice(this.indicesOffset, // index,
                        hasBeenInitialized ? this.numberIndices : 0, // number of elements to remove before pushing
                        this.verticesOffset/3+0,
                        this.verticesOffset/3+1,
                        this.verticesOffset/3+2,

                        this.verticesOffset/3+1,
                        this.verticesOffset/3+2,
                        this.verticesOffset/3+3,

                        this.verticesOffset/3+0,
                        this.verticesOffset/3+2,
                        this.verticesOffset/3+3,

                        this.verticesOffset/3+0,
                        this.verticesOffset/3+1,
                        this.verticesOffset/3+3
               );
  }

  setColors() {
    for (let i=0; i<this.numberVertices; i++)
      colors.push(this.color.r, this.color.g, this.color.b, this.color.a);
  }
}
