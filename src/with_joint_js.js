// Preparation:
//   npm install --save jointjs

// const g = require("jointjs");
const joint = require("jointjs")

function draw_sample_view() {
    const g = joint
    const namespace = joint.shapes;
    const graph = new joint.dia.Graph({}, { cellNamespace: namespace });
    const paper = new joint.dia.Paper({
        el: document.getElementById('jointjs_holder'),
        model: graph,
        width: 1000,
        height: 600,
        gridSize: 10,
        drawGrid: true,
        background: {
            color: 'rgba(0, 255, 0, 0.3)'
        },
        cellViewNamespace: namespace
    });
    // scale & translate
    // paper.scale(0.5, 0.5);
    // paper.translate(300, 50);
    const rect = new joint.shapes.standard.Rectangle();
    rect.position(250, 100);
    rect.resize(100, 40);
    rect.attr({
        body: {
            fill: 'blue'
        },
        label: {
            text: 'Hello',
            fill: 'white'
        }
    });
    rect.addTo(graph);

    const rect2 = rect.clone();
    rect2.translate(300, 200);
    rect2.attr('label/text', 'World!');
    rect2.attr({
        body: {
            rx: 5,
            ry: 5
        }
    })
    rect2.addTo(graph);

    const link = new joint.shapes.standard.Link();
    link.source(rect);
    link.target(rect2);
    link.attr({
        line: {
            stroke: 'orange'
        }
    })
    link.labels([{
        attrs: {
            text: {
                text: 'Hello, World!'
            }
        }
    }])
    link.attr('line/stroke', 'orange')
    link.addTo(graph);

    const rect3 = rect.clone();
    rect3.attr('label/text', 'Foo')
    rect3.attr({interactive: false})
    rect3.translate(0, 300);
    rect3.addTo(graph);
    // const rect4 = new joint.shapes.basic.Rect({
    //     position: { x: 500, y: 200 },
    //     size: { width: 100, height: 40 }
    // })
    const rect4 = rect.clone();
    rect4.attr('label/text', 'Bar')
    rect4.translate(200, 0);
    const circ1 = new joint.shapes.standard.Circle({
        position: { x: 460, y: 115},
        size: { width: 10, height: 10 },
    });
    const circ2 = new joint.shapes.standard.Circle({
        position: { x: 460, y: 130},
        size: { width: 10, height: 10 },
    });
    graph.addCells([rect4, circ1, circ2])
    // circ1.addTo(graph);
    // rect4.addTo(graph);
    rect4.embed(circ1);
    rect4.embed(circ2)

    const link34 = new joint.shapes.standard.Link({
        source: { id: rect3.id },
        target: { id: rect4.id },
        attrs: {
            line: {
                stroke: 'green'
            }
        }
    });
    link34
        .router('orthogonal')
        // .connector('rounded')
        .connector('jumpover', { size: 10 });
    link34.addTo(graph);
    // new joint.shapes.standard.Link({
    //     source: { id: rect3.id },
    //     target: { id: rect4.id },
    //     attrs: {
    //         line: {
    //             stroke: 'dardgrey'
    //         }
    //     }
    // }).addTo(graph);

    if (false) { // Functions and classes of JointJS+ are not supported
        const paperScroller = new joint.ui.PaperScroller({
            paper,
            autoResizePaper: true,
            cursor: 'grab'
        });
    }

    console.log(graph.toJSON());

    // Pseudo Stencil
    const stencil_base1 = new joint.shapes.standard.Rectangle({
        position: { x: 10, y: 150 },
        size: { width: 100, height: 40 },
        attrs: {
            body: {
                fill: 'blue'
            },
            label: {
                text: 'Baz (background)',
                fill: 'white'
            }
        }
    });
    const stencil_to_original_position = {};
    const stencil_shape1 = new joint.shapes.standard.Rectangle({
        position: { x: 10, y: 150 },
        size: { width: 100, height: 40 },
        attrs: {
            body: {
                fill: 'blue'
            },
            label: {
                text: 'Baz (as stencil)',
                fill: 'white'
            }
        }
    });
    stencil_to_original_position[stencil_shape1.id] = stencil_shape1.position();
    false && stencil_shape1.on('change:position', function(element, pos) {
        // const pos = stencil_base1.position(element.get('position'))
        console.log(`moved: ${pos.x}, ${pos.y}`);
    });
    true && paper.on('change:position', function(element, pos) {
        // const pos = stencil_base1.position(element.get('position'))
        console.log(`(p)moved: ${pos.x}, ${pos.y}`);
    });
    true && stencil_shape1.on('transition:end', function(element, pos) {
        console.log(`transition_end: ${keys(pos)}`);
    });
    true && paper.on('element:pointerdblclick', function(element, evt) {
        console.log(`Dclicked: ${element.id} (other_keys: ${keys(evt)})`);
    });
    true && paper.on('element:pointerclick', function(element, evt) {
        console.log(`Sclicked: ${element.id} (other_keys: ${keys(evt)})`);
    });
    true && paper.on('element:pointerup', function(element, evt) {
        console.log(`p_up: ${element.id} (other_keys: ${keys(evt)})`);
    });
    true && paper.on('cell:pointerup', function(cellView, evt) {
        console.log(`cell:p_up: ${cellView.id}`);
        if (Object.keys(stencil_to_original_position).includes(cellView.model.id)) {
            console.log('dup')
            const shape_element = cellView.model
            const new_element = shape_element.clone();
            const label_text = shape_element.attr('label/text');
            new_element.attr('label/text', label_text.replace(/\(as stencil\)/, ''));
            const pos_original = stencil_to_original_position[shape_element.id];
            const pos_after = shape_element.position();
            shape_element.translate(pos_original.x - pos_after.x, pos_original.y - pos_after.y);
            graph.addCells([new_element]);
        }
    });
    graph.addCells([stencil_base1, stencil_shape1]);
}

function keys(obj) {
    if (typeof obj !== 'object') {
        return [];
    }
    return Object.keys(obj);
}

draw_sample_view();