class SolidShape {
  constructor(vertices, indices, colors, center, color, numberVertices) {
    this.vertices = vertices;
    this.indices = indices;
    this.colors = colors;

    this.verticesOffset = this.vertices.length;
    this.indicesOffset = this.vertices.length/3;
    this.colorsOffset = this.colors;
    this.numberVertices = numberVertices;

    this.center = center;
    this.color = color;

    if (new.target === SolidShape)
      throw new TypeError("Cannot construct SolidShape instances directly.");
  }

  setVertices() { throw new Error("This method must be implemented by derived classes."); }
  setIndices() { throw new Error("This method must be implemented by derived classes."); }
  setColors() { throw new Error("This method must be implemented by derived classes."); }

  move(newCenter) {
    this.center = newCenter;
    this.setVertices();
  }

  rotate(angle, xAxis=true, yAxis=true, zAxis=true) {
    let myVertices = this.vertices.slice(this.verticesOffset, this.numberVertices*3);
    let newVertices = [];

    // for each group of 3 values (forming a vertex)
    for (let i=0; i<myVertices.length; i+=3) {
      // init vec4 vertex coords
      let vertex = vec4.fromValues(myVertices[i+0], myVertices[i+1], myVertices[i+2], 1.0);

      // create an identity mat4
      let viewMatrix = mat4.create();
      mat4.identity(viewMatrix);
      // mat4.translate(viewMatrix, viewMatrix, [this.center.x,this.center.y,this.center.z]);

      // rotate the mat4 according to the given angle and axis
      if(xAxis) mat4.rotate(viewMatrix, viewMatrix, degToRad(angle), [1.0, 0.0, 0.0]);
      if(yAxis) mat4.rotate(viewMatrix, viewMatrix, degToRad(angle), [0.0, 1.0, 0.0]);
      if(zAxis) mat4.rotate(viewMatrix, viewMatrix, degToRad(angle), [0.0, 0.0, 1.0]);

      // multiply the vertex coordinates by the rotation matrix
      vec4.transformMat4(vertex, vertex, viewMatrix);

      // push the new coordinates
      newVertices.push(vertex[0], vertex[1], vertex[2]);
    }

    // replace the old vertices by the new ones
    this.vertices.splice.apply(this.vertices, [this.verticesOffset, this.numberVertices*3].concat(newVertices));
  }
}
