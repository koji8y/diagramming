// import { Hello } from "./hello.js";

// new Hello("Taro").greet();

//// canvas
const rcanvas = document.getElementById("fig");
if (rcanvas.getContext) {
    const ctx = rcanvas.getContext("2d");
    ctx.strokeRect(100, 100, 100, 40);
    ctx.fillRect(250, 100, 100, 40);
    ctx.fillRect(100, 150, 100, 40);
    ctx.clearRect(110, 160, 80, 20);
}

//// diagram-js
import Diagram from "diagram-js";
import CustomRenderer from "./custom_renderer.js";

const diagram = new Diagram({
    container: "#canvas",
    additionalModules: [
        { customRenderer: ["type", CustomRenderer]}
    ]
})

// printKeyValues(diagram, {label: 'diagram', indent: 2})

import { create } from "diagram-js/lib/model";
import { printKeyValues, printKeys } from "./util/print_utils.ts"
// import { Shape } from "diagram-js/lib/model";
const canvas = diagram.get('canvas');
// printKeys(canvas, {label: 'canvas', indent: 2})
const root = create('root', {
    id: 'root1',
    x: 50, y: 50,
    width: 400, height: 250})
// canvas.addRootElement(root);
const shape = create('shape', {
    id: 'shape1',
    x: 100,
    y: 100,
    width: 100,
    height: 80
});

// printKeyValues(3, {label: 'const', indent: 2})
// printKeyValues(shape, {label: 'shape', indent: 2})

canvas.addShape(shape);
canvas.addShape(create('shape', {
    id: 'shape2',
    x: 250, y: 100,
    width: 100, height: 40}))