class Tetrahedron extends SolidShape {
  constructor(vertices, indices, colors, normals, width=1.0, center={x:1.0, y:1.0, z:1.0}, color={r:1.0, g:1.0, b:1.0, a:1.0}) {
    super(vertices, indices, colors, normals, center, color,
          12 // number of vertices
         );

    this.width = width;

    this.setVertices();
    this.setIndices();
    this.setColors();
    this.setNormals();
  }

  /**
  * Pushes the tetrahedron's vertices in the shared "vertices array".
  */
  setVertices(hasBeenInitialized=false) {
    let R = this.width/Math.sqrt(3);
    let r = R/2;
    this.vertices.splice(this.verticesOffset, // index
                         hasBeenInitialized ? this.numberVertices*3 : 0, // number of elements to remove before pushing
                         this.center.x - (this.width/2), this.center.y - r, this.center.z - r,  // P0
                         this.center.x + (this.width/2), this.center.y - r, this.center.z - r,  // P1
                         this.center.x,                  this.center.y - r, this.center.z + R,  // P2

                         this.center.x + (this.width/2), this.center.y - r, this.center.z - r,  // P1
                         this.center.x,                  this.center.y + R, this.center.z,      // P3
                         this.center.x,                  this.center.y - r, this.center.z + R,  // P2

                         this.center.x - (this.width/2), this.center.y - r, this.center.z - r,  // P0
                         this.center.x,                  this.center.y - r, this.center.z + R,  // P2
                         this.center.x,                  this.center.y + R, this.center.z,      // P3

                         this.center.x - (this.width/2), this.center.y - r, this.center.z - r,  // P0
                         this.center.x,                  this.center.y + R, this.center.z,      // P3
                         this.center.x + (this.width/2), this.center.y - r, this.center.z - r   // P1
                      );
  }
}
