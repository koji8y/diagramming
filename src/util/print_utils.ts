export function printKeyValues(obj, opt = { label: '', indent: 0 }, printValues = true) {
    let indent = '';
    for (let i = 0; i < opt.indent || 0; i++) {
        indent = `${indent} `;
    }
    if (typeof obj !== 'object') {
        console.log(`${indent}${opt.label ? opt.label + (printValues ? '=' : '') : ''}${printValues ? obj : ''}`);
        return;
    }
    for (const key in obj) {
        console.log(`${indent}${opt.label || ''}[${key}]` + (printValues ? `=${obj[key]}` : ''));
    }
}

export function printKeys(obj, opt = {label: '', indent: 0}) {
    printKeyValues(obj, opt, false)
}
