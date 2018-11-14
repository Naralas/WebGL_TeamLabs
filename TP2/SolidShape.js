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
}
