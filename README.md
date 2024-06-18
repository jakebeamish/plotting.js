This is a dependency-free JavaScript framework for making SVG files for penplotters.

## Features

- A Sketch class to contain everything needed to create and render the SVG
- 2D Vector and Line classes for geometry
- A seedable PRNG with helper functions:
    - Random integer in range
    - Random float in range
    - Random element in array
    - Random hexadecimal string
- Maths functions such as fract, wrap, lerp, map

## Usage

The way I'm using this framework currently is something like this:

1. Create a new Sketch (with optional parameters for dimensions, units and background colour)
2. Create and manipulate Vectors and Lines in the sketch.generate() function
3. Add Lines to be included as SVG elements in the Sketch by pushing Lines to the Sketch's `lines` array
4. Call the Sketch's instance method `draw()`

```js
import { Sketch, Vector, Line, LCG } from "../../index.js"

// Setup the sketch
const sketch = new Sketch(500, 500, {
    units: "mm",
    title: "My amazing sketch"
});

// Define a generate() function
// This is where the work is made
sketch.generate = () => {
    // Create Lines from Vectors
    const a = new Vector(10, 10);
    const b = new Vector(90, 90);
    const l = new Line(a, b);

    // Add the Lines to the Sketch object's lines array
    sketch.lines.push(line);
}

// Call draw() on the Sketch
sketch.draw();
```


## Roadmap

TODO:
- Tutorials using JSDoc
- Examples using JSdoc
- Line line intersection
- More PRNG implementations
- Units conversion
- Support for SVG paths
- SVG output validation
- HTML GUI for changing params
- Keyboard shortcuts
- 3D support
- Noise functions
- Batch create and download

## Contributing

Currently, I am using `jest` and `jest-cucumber` for testing. Some scenarios are described in feature files, but the majority of tests are not.

I'm trying to make sure that everything in the library is well documented using `JSDoc`.

I am also trying out Biome.js for formatting.