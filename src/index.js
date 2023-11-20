function printKeyValues(obj, opt = {label: '', indent: 0}, printValues = true) {
    let indent = ''
    for (let i = 0; i < opt.indent || 0; i++) {
        indent = `${indent} `
    }
    if (typeof obj !== 'object') {
        console.log(`${indent}${opt.label ? opt.label + (printValues ? '=' : '') : ''}${printValues ? obj : ''}`)
        return
    }
    for (const key in obj) {
        console.log(`${indent}${opt.label || ''}[${key}]` + (printValues ? `=${obj[key]}` : ''))
    }
}
function printKeys(obj, opt = {label: '', indent: 0}) {
    printKeyValues(obj, opt, false)
}

import { Hello } from "./hello.js";

new Hello("Taro").greet();

import Diagram from "diagram-js";

const diagram = new Diagram({
    container: "#canvas"
})

// printKeyValues(diagram, {label: 'diagram', indent: 2})

import { create } from "diagram-js/lib/model";
// import { Shape } from "diagram-js/lib/model";
const canvas = diagram.get('canvas');
printKeys(canvas, {label: 'canvas', indent: 2})
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
    width: 100, height: 40, color: 'red'}))