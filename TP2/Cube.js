class Cube extends SolidShape {
  constructor(vertices, indices, colors, width=1.0, center={x:1.0, y:1.0, z:1.0}, color={r:1.0, g:1.0, b:1.0, a:1.0}) {
    super(vertices, indices, colors, center, color, 8);

    this.width = width;

    this.setVertices();
    this.setIndices();
    this.setColors();
  }

  setVertices(hasBeenInitialized=false) {
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
  }

  setIndices() {
    this.indices.push(this.indicesOffset+0,
                      this.indicesOffset+1,
                      this.indicesOffset+2,

                      this.indicesOffset+1,
                      this.indicesOffset+2,
                      this.indicesOffset+3,

                      this.indicesOffset+0,
                      this.indicesOffset+1,
                      this.indicesOffset+6,

                      this.indicesOffset+6,
                      this.indicesOffset+1,
                      this.indicesOffset+5,

                      this.indicesOffset+0,
                      this.indicesOffset+2,
                      this.indicesOffset+6,

                      this.indicesOffset+2,
                      this.indicesOffset+7,
                      this.indicesOffset+6,

                      this.indicesOffset+5,
                      this.indicesOffset+6,
                      this.indicesOffset+7,

                      this.indicesOffset+4,
                      this.indicesOffset+5,
                      this.indicesOffset+7,

                      this.indicesOffset+2,
                      this.indicesOffset+3,
                      this.indicesOffset+4,

                      this.indicesOffset+2,
                      this.indicesOffset+7,
                      this.indicesOffset+4,

                      this.indicesOffset+1,
                      this.indicesOffset+3,
                      this.indicesOffset+4,

                      this.indicesOffset+1,
                      this.indicesOffset+4,
                      this.indicesOffset+5
               );
  }

  setColors() {
    for (let i=0; i<this.vertices.length/3; i++)
      colors.push(this.color.r, this.color.g, this.color.b, this.color.a);
  }
}
