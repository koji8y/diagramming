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
        position: { x: 520, y: 115},
        size: { width: 20, height: 20 },
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
}

draw_sample_view();