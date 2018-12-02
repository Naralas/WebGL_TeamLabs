class Sphere extends SolidShape {
  constructor(vertices, indices, colors, normals, width=1.0, center={x:1.0, y:1.0, z:1.0}, color={r:1.0, g:1.0, b:1.0, a:1.0}) {
    super(vertices, indices, colors, normals, center, color,
          1920 // number of vertices
         );

    this.radius = width/2;
    this.sphereDivision = 1;

    this.setVertices();
    this.setIndices();
    this.setColors();
    this.setNormals();
  }

  /**
  * Pushes the sphere's vertices in the shared "vertices array".
  */
  setVertices(hasBeenInitialized=false) {
    let tmpVertices = [];
    this.initIcosahedron(tmpVertices);

    for (let i=0; i<tmpVertices.length; i++)
      this.vertices.splice(this.verticesOffset+i, // index
                           hasBeenInitialized ? 1 : 0, // number of elements to remove before pushing
                           tmpVertices[i] // element to push
                         );
   // move the sphere to its position and scales it to the right size
   let defaultSphereCenter = {x: 0.0, y: 0.0, z: 0.0};
   let newCenter = this.center;
   this.center = defaultSphereCenter;
   this.move(newCenter);
   this.scale(this.radius);
  }

  /**
  * Normalizes a given point.
  * This method taken from the example 3 from the chapter 7 of "Webgl ar la pratique".
  */
  normalize(v){
	  let d = Math.sqrt(v[0]*v[0] + v[1]*v[1] + v[2]*v[2]);
	  if (d!=0.0){
		  v[0]/=d;
		  v[1]/=d;
		  v[2]/=d;
	  }
	  return v;
	}

  /**
  * Recusive subdivision process to find sphere's vertices.
  * This method taken from the example 3 from the chapter 7 of "Webgl ar la pratique".
  */
  oneToFourTriangle(v1, v2, v3, depth, vertices) {
    let v12 = [];
    let v23 = [];
    let v31 = [];

    if (depth == 0) {
      vertices.push(v1[0], v1[1], v1[2]); // iV1
      vertices.push(v2[0], v2[1], v2[2]); // iV2
      vertices.push(v3[0], v3[1], v3[2]); // iV3
    } else {
      for (let i=0; i<3; i++) {
        v12.push((v1[i]+v2[i])/2.0);
        v23.push((v2[i]+v3[i])/2.0);
        v31.push((v3[i]+v1[i])/2.0);
      }

      v12 = this.normalize(v12);
      v23 = this.normalize(v23);
      v31 = this.normalize(v31);

      this.oneToFourTriangle(v1, v12, v31, depth-1, vertices);
      this.oneToFourTriangle(v2, v23, v12, depth-1, vertices);
      this.oneToFourTriangle(v3, v31, v23, depth-1, vertices);
      this.oneToFourTriangle(v12, v23, v31, depth-1, vertices);
    }
  }

  /**
  * Initializes the default icosahdron to create a sphere. Starts the recursive process.
  * This method taken from the example 3 from the chapter 7 of "Webgl ar la pratique".
  */
  initIcosahedron(vertices) {
    let X = 0.525731112119133696;
		let Z = 0.850650808352039932;

		let icosahedronvertex = [];
		icosahedronvertex.push(-X,  0.0,  Z);
		icosahedronvertex.push(X,   0.0,  Z);
		icosahedronvertex.push(-X,  0.0, -Z);
		icosahedronvertex.push(X,   0.0, -Z);
		icosahedronvertex.push(0.0,  Z,   X);
		icosahedronvertex.push(0.0,  Z,  -X);
		icosahedronvertex.push(0.0, -Z,   X);
		icosahedronvertex.push(0.0, -Z,  -X);
		icosahedronvertex.push(Z,    X,  0.0);
		icosahedronvertex.push(-Z,   X,  0.0);
		icosahedronvertex.push(Z,   -X,  0.0);
		icosahedronvertex.push(-Z,  -X,  0.0);

		let icosahedrontriangle = [];
		icosahedrontriangle.push(1,  4,  0);
		icosahedrontriangle.push(4,  9,  0);
		icosahedrontriangle.push(4,  5,  9);
		icosahedrontriangle.push(8,  5,  4);
		icosahedrontriangle.push(1,  8,  4);
		icosahedrontriangle.push(1,  10, 8);
		icosahedrontriangle.push(10, 3,  8);
		icosahedrontriangle.push(8,  3,  5);
		icosahedrontriangle.push(3,  2,  5);
		icosahedrontriangle.push(3,  7,  2);
		icosahedrontriangle.push(3,  10, 7);
		icosahedrontriangle.push(10, 6,  7);
		icosahedrontriangle.push(6,  11, 7);
		icosahedrontriangle.push(6,  0,  11);
		icosahedrontriangle.push(6,  1,  0);
		icosahedrontriangle.push(10, 1,  6);
		icosahedrontriangle.push(11, 0,  9);
		icosahedrontriangle.push(2,  11, 9);
		icosahedrontriangle.push(5,  2,  9);
		icosahedrontriangle.push(11, 2,  7);

		for (let i=0; i<icosahedrontriangle.length; i+=3) {
			let v1 = [];
			let v2 = [];
			let v3 = [];

			let vertexIndexStart = icosahedrontriangle[i] * 3;
			v1.push(icosahedronvertex[vertexIndexStart + 0],
					    icosahedronvertex[vertexIndexStart + 1],
					    icosahedronvertex[vertexIndexStart + 2]);

			vertexIndexStart = icosahedrontriangle[i+1] * 3;
			v2.push(icosahedronvertex[vertexIndexStart + 0],
					    icosahedronvertex[vertexIndexStart + 1],
					    icosahedronvertex[vertexIndexStart + 2]);

			vertexIndexStart = icosahedrontriangle[i+2] * 3;
			v3.push(icosahedronvertex[vertexIndexStart + 0],
					    icosahedronvertex[vertexIndexStart + 1],
					    icosahedronvertex[vertexIndexStart + 2]);

	    this.oneToFourTriangle(v1, v2, v3, this.sphereDivision, vertices);
		}
  }
}
