const namespace = joint.shapes;
const graph = new joint.dia.Graph({}, { cellNamespace: namespace });
const paper = new joint.dia.Paper({
    el: document.getElementById('jointjs_holder'),
    model: graph,
    width: 1000,
    height: 600,
    gridSize: 1,
    drawGrid: true,
    background: {
        color: 'silver'
    },
    cellViewNamespace: namespace
});
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
rect2.addTo(graph);

const link = new joint.shapes.standard.Link();
link.source(rect);
link.target(rect2);
link.addTo(graph);