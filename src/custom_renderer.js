import inherits from 'inherits';
import BaseRenderer from 'diagram-js/lib/draw/BaseRenderer';

// This priority is the higher the better
const HIGH_PRIORITY = 1500;

function CustomRenderer(eventBus, styles) {
    BaseRenderer.call(this, eventBus, HIGH_PRIORITY);

    this.drawShape = function(parentNode, element) {
        // const shape = document.createElement('div');
        const shape = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        const style = styles.cls(element, [
            'custom-shape',
            // 'custom-shape-' + element.type
            ], {
            stroke: 'blue',
            strokeWidth: 2,
            fill: 'white'
        });
        Object.keys(style).forEach(name => {
            shape.setAttribute(name, style[name]);
        })
        parentNode.appendChild(shape);
        return shape;
    }
}

inherits(CustomRenderer, BaseRenderer);

CustomRenderer.$inject = ['eventBus', 'styles'];

export default CustomRenderer;
