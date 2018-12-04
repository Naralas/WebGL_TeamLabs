class ImportedModel extends SolidShape {
  constructor(vertices, indices, colors, normals, presetVertices, presetNormals, ratioSize=1.0, center={x:1.0, y:1.0, z:1.0}, color={r:1.0, g:1.0, b:1.0, a:1.0}) {
    super(vertices, indices, colors, normals, center, color,
          presetVertices.length/3 // number of vertices
         );

    this.ratioSize = ratioSize;
    this.presetVertices = presetVertices;
    this.presetNormals = presetNormals

    this.setVertices();
    this.setIndices();
    this.setColors();
    this.pushNormals(this.presetNormals);
  }

  /**
  * Pushes the cube's vertices in the shared "vertices array".
  */
  setVertices(hasBeenInitialized=false) {
    for (let i=0; i<this.presetVertices.length; i++)
      this.vertices.splice(this.verticesOffset + i, // index
                           hasBeenInitialized ? 1 : 0, // number of elements to remove before pushing
                           this.presetVertices[i]
                        );
    let defaultModelCenter = {x: 0.0, y: 0.0, z: 0.0};
    let newCenter = this.center;
    this.center = defaultModelCenter;
    this.move(newCenter);
    this.scale(this.ratioSize);
  }
}
