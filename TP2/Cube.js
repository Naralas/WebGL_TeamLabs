class Cube extends SolidShape {
  constructor(vertices, indices, colors, normals, width=1.0, center={x:1.0, y:1.0, z:1.0}, color={r:1.0, g:1.0, b:1.0, a:1.0}) {
    super(vertices, indices, colors, normals, center, color,
          36 // number of vertices
         );

    this.width = width;

    this.setVertices();
    this.setIndices();
    this.setColors();
    this.setNormals();
  }

  /**
  * Pushes the cube's vertices in the shared "vertices array".
  */
  setVertices(hasBeenInitialized=false) {
    this.vertices.splice(this.verticesOffset, // index
                         hasBeenInitialized ? this.numberVertices*3 : 0, // number of elements to remove before pushing
                         this.center.x - this.width/2, this.center.y - this.width/2, this.center.z + this.width/2,  // P0
                         this.center.x + this.width/2, this.center.y - this.width/2, this.center.z + this.width/2,  // P1
                         this.center.x - this.width/2, this.center.y + this.width/2, this.center.z + this.width/2,  // P2

                         this.center.x + this.width/2, this.center.y - this.width/2, this.center.z + this.width/2,  // P1
                         this.center.x + this.width/2, this.center.y + this.width/2, this.center.z + this.width/2,  // P3
                         this.center.x - this.width/2, this.center.y + this.width/2, this.center.z + this.width/2,  // P2

                         this.center.x - this.width/2, this.center.y - this.width/2, this.center.z + this.width/2,  // P0
                         this.center.x - this.width/2, this.center.y - this.width/2, this.center.z - this.width/2,  // P6
                         this.center.x + this.width/2, this.center.y - this.width/2, this.center.z + this.width/2,  // P1

                         this.center.x - this.width/2, this.center.y - this.width/2, this.center.z - this.width/2,  // P6
                         this.center.x + this.width/2, this.center.y - this.width/2, this.center.z - this.width/2,  // P5
                         this.center.x + this.width/2, this.center.y - this.width/2, this.center.z + this.width/2,  // P1

                         this.center.x - this.width/2, this.center.y + this.width/2, this.center.z + this.width/2,  // P2
                         this.center.x - this.width/2, this.center.y - this.width/2, this.center.z - this.width/2,  // P6
                         this.center.x - this.width/2, this.center.y - this.width/2, this.center.z + this.width/2,  // P0

                         this.center.x - this.width/2, this.center.y + this.width/2, this.center.z + this.width/2,  // P2
                         this.center.x - this.width/2, this.center.y + this.width/2, this.center.z - this.width/2,  // P7
                         this.center.x - this.width/2, this.center.y - this.width/2, this.center.z - this.width/2,  // P6

                         this.center.x - this.width/2, this.center.y - this.width/2, this.center.z - this.width/2,  // P6
                         this.center.x - this.width/2, this.center.y + this.width/2, this.center.z - this.width/2,  // P7
                         this.center.x + this.width/2, this.center.y - this.width/2, this.center.z - this.width/2,  // P5

                         this.center.x + this.width/2, this.center.y - this.width/2, this.center.z - this.width/2,  // P5
                         this.center.x - this.width/2, this.center.y + this.width/2, this.center.z - this.width/2,  // P7
                         this.center.x + this.width/2, this.center.y + this.width/2, this.center.z - this.width/2,  // P4

                         this.center.x + this.width/2, this.center.y + this.width/2, this.center.z + this.width/2,  // P3
                         this.center.x + this.width/2, this.center.y + this.width/2, this.center.z - this.width/2,  // P4
                         this.center.x - this.width/2, this.center.y + this.width/2, this.center.z + this.width/2,  // P2

                         this.center.x - this.width/2, this.center.y + this.width/2, this.center.z + this.width/2,  // P2
                         this.center.x + this.width/2, this.center.y + this.width/2, this.center.z - this.width/2,  // P4
                         this.center.x - this.width/2, this.center.y + this.width/2, this.center.z - this.width/2,  // P7

                         this.center.x + this.width/2, this.center.y - this.width/2, this.center.z + this.width/2,  // P1
                         this.center.x + this.width/2, this.center.y + this.width/2, this.center.z - this.width/2,  // P4
                         this.center.x + this.width/2, this.center.y + this.width/2, this.center.z + this.width/2,  // P3

                         this.center.x + this.width/2, this.center.y - this.width/2, this.center.z + this.width/2,  // P1
                         this.center.x + this.width/2, this.center.y - this.width/2, this.center.z - this.width/2,  // P5
                         this.center.x + this.width/2, this.center.y + this.width/2, this.center.z - this.width/2   // P4
                      );
  }
}
