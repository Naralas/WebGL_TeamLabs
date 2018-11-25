class Cube extends SolidShape {
  constructor(vertices, indices, colors, normals, width=1.0, center={x:1.0, y:1.0, z:1.0}, color={r:1.0, g:1.0, b:1.0, a:1.0}) {
    super(vertices, indices, colors, normals, center, color, 36, 36);

    this.width = width;

    this.setVertices();
    this.setIndices();
    this.setColors();
    this.setNormals();
  }

  /* setVertices(hasBeenInitialized=false) {
    this.vertices.splice(this.verticesOffset, // index
                         hasBeenInitialized ? this.numberVertices*3 : 0, // number of elements to remove before pushing
                         this.center.x - this.width/2, this.center.y - this.width/2, this.center.z + this.width/2,  // P0
                         this.center.x + this.width/2, this.center.y - this.width/2, this.center.z + this.width/2,  // P1
                         this.center.x - this.width/2, this.center.y + this.width/2, this.center.z + this.width/2,  // P2
                         this.center.x + this.width/2, this.center.y + this.width/2, this.center.z + this.width/2,  // P3
                         this.center.x + this.width/2, this.center.y + this.width/2, this.center.z - this.width/2,  // P4
                         this.center.x + this.width/2, this.center.y - this.width/2, this.center.z - this.width/2,  // P5
                         this.center.x - this.width/2, this.center.y - this.width/2, this.center.z - this.width/2,  // P6
                         this.center.x - this.width/2, this.center.y + this.width/2, this.center.z - this.width/2   // P7
                      );
  } */

  setVertices(hasBeenInitialized=false) {
    this.vertices.splice(this.verticesOffset, // index
                         hasBeenInitialized ? this.numberVertices*3 : 0, // number of elements to remove before pushing
                         this.center.x - this.width/2, this.center.y - this.width/2, this.center.z + this.width/2,  // P0
                         this.center.x + this.width/2, this.center.y - this.width/2, this.center.z + this.width/2,  // P1
                         this.center.x - this.width/2, this.center.y + this.width/2, this.center.z + this.width/2,  // P2

                         this.center.x + this.width/2, this.center.y - this.width/2, this.center.z + this.width/2,  // P1
                         this.center.x - this.width/2, this.center.y + this.width/2, this.center.z + this.width/2,  // P2
                         this.center.x + this.width/2, this.center.y + this.width/2, this.center.z + this.width/2,  // P3
                         
                         this.center.x - this.width/2, this.center.y - this.width/2, this.center.z + this.width/2,  // P0
                         this.center.x + this.width/2, this.center.y - this.width/2, this.center.z + this.width/2,  // P1
                         this.center.x - this.width/2, this.center.y - this.width/2, this.center.z - this.width/2,  // P6

                         this.center.x - this.width/2, this.center.y - this.width/2, this.center.z - this.width/2,  // P6
                         this.center.x + this.width/2, this.center.y - this.width/2, this.center.z + this.width/2,  // P1
                         this.center.x + this.width/2, this.center.y - this.width/2, this.center.z - this.width/2,  // P5

                         this.center.x - this.width/2, this.center.y - this.width/2, this.center.z + this.width/2,  // P0                         
                         this.center.x - this.width/2, this.center.y + this.width/2, this.center.z + this.width/2,  // P2
                         this.center.x - this.width/2, this.center.y - this.width/2, this.center.z - this.width/2,  // P6

                         this.center.x - this.width/2, this.center.y + this.width/2, this.center.z + this.width/2,  // P2
                         this.center.x - this.width/2, this.center.y + this.width/2, this.center.z - this.width/2,  // P7
                         this.center.x - this.width/2, this.center.y - this.width/2, this.center.z - this.width/2,  // P6

                         this.center.x + this.width/2, this.center.y - this.width/2, this.center.z - this.width/2,  // P5
                         this.center.x - this.width/2, this.center.y - this.width/2, this.center.z - this.width/2,  // P6
                         this.center.x - this.width/2, this.center.y + this.width/2, this.center.z - this.width/2,  // P7

                         this.center.x + this.width/2, this.center.y + this.width/2, this.center.z - this.width/2,  // P4
                         this.center.x + this.width/2, this.center.y - this.width/2, this.center.z - this.width/2,  // P5
                         this.center.x - this.width/2, this.center.y + this.width/2, this.center.z - this.width/2,  // P7

                         this.center.x - this.width/2, this.center.y + this.width/2, this.center.z + this.width/2,  // P2
                         this.center.x + this.width/2, this.center.y + this.width/2, this.center.z + this.width/2,  // P3
                         this.center.x + this.width/2, this.center.y + this.width/2, this.center.z - this.width/2,  // P4

                         this.center.x - this.width/2, this.center.y + this.width/2, this.center.z + this.width/2,  // P2
                         this.center.x - this.width/2, this.center.y + this.width/2, this.center.z - this.width/2,  // P7
                         this.center.x + this.width/2, this.center.y + this.width/2, this.center.z - this.width/2,  // P4

                         this.center.x + this.width/2, this.center.y - this.width/2, this.center.z + this.width/2,  // P1
                         this.center.x + this.width/2, this.center.y + this.width/2, this.center.z + this.width/2,  // P3
                         this.center.x + this.width/2, this.center.y + this.width/2, this.center.z - this.width/2,  // P4

                         this.center.x + this.width/2, this.center.y - this.width/2, this.center.z + this.width/2,  // P1
                         this.center.x + this.width/2, this.center.y + this.width/2, this.center.z - this.width/2,  // P4
                         this.center.x + this.width/2, this.center.y - this.width/2, this.center.z - this.width/2   // P5
                      );
  }

  /* setIndices(hasBeenInitialized=false) {
    this.indices.splice(this.indicesOffset, // index,
                        hasBeenInitialized ? this.numberIndices : 0, // number of elements to remove before pushing
                        this.verticesOffset/3+0,
                        this.verticesOffset/3+1,
                        this.verticesOffset/3+2,

                        this.verticesOffset/3+1,
                        this.verticesOffset/3+2,
                        this.verticesOffset/3+3,

                        this.verticesOffset/3+0,
                        this.verticesOffset/3+1,
                        this.verticesOffset/3+6,

                        this.verticesOffset/3+6,
                        this.verticesOffset/3+1,
                        this.verticesOffset/3+5,

                        this.verticesOffset/3+0,
                        this.verticesOffset/3+2,
                        this.verticesOffset/3+6,

                        this.verticesOffset/3+2,
                        this.verticesOffset/3+7,
                        this.verticesOffset/3+6,

                        this.verticesOffset/3+5,
                        this.verticesOffset/3+6,
                        this.verticesOffset/3+7,

                        this.verticesOffset/3+4,
                        this.verticesOffset/3+5,
                        this.verticesOffset/3+7,

                        this.verticesOffset/3+2,
                        this.verticesOffset/3+3,
                        this.verticesOffset/3+4,

                        this.verticesOffset/3+2,
                        this.verticesOffset/3+7,
                        this.verticesOffset/3+4,

                        this.verticesOffset/3+1,
                        this.verticesOffset/3+3,
                        this.verticesOffset/3+4,

                        this.verticesOffset/3+1,
                        this.verticesOffset/3+4,
                        this.verticesOffset/3+5
               );
  } */
  setIndices(hasBeenInitialized=false) {
    this.indices.splice(this.indicesOffset, // index,
                        hasBeenInitialized ? this.numberIndices : 0, // number of elements to remove before pushing
                        this.verticesOffset/3+0,
                        this.verticesOffset/3+1,
                        this.verticesOffset/3+2,

                        this.verticesOffset/3+3,
                        this.verticesOffset/3+4,
                        this.verticesOffset/3+5,

                        this.verticesOffset/3+6,
                        this.verticesOffset/3+7,
                        this.verticesOffset/3+8,

                        this.verticesOffset/3+9,
                        this.verticesOffset/3+10,
                        this.verticesOffset/3+11,

                        this.verticesOffset/3+12,
                        this.verticesOffset/3+13,
                        this.verticesOffset/3+14,

                        this.verticesOffset/3+15,
                        this.verticesOffset/3+16,
                        this.verticesOffset/3+17,

                        this.verticesOffset/3+18,
                        this.verticesOffset/3+19,
                        this.verticesOffset/3+20,

                        this.verticesOffset/3+21,
                        this.verticesOffset/3+22,
                        this.verticesOffset/3+23,

                        this.verticesOffset/3+24,
                        this.verticesOffset/3+25,
                        this.verticesOffset/3+26,

                        this.verticesOffset/3+27,
                        this.verticesOffset/3+28,
                        this.verticesOffset/3+29,

                        this.verticesOffset/3+30,
                        this.verticesOffset/3+31,
                        this.verticesOffset/3+32,

                        this.verticesOffset/3+33,
                        this.verticesOffset/3+34,
                        this.verticesOffset/3+35
               );
  }


  setColors() {
    for (let i=0; i<this.numberVertices; i++)
      colors.push(this.color.r, this.color.g, this.color.b, this.color.a);
  }


}
