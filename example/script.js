'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'ff',
        tag: 'nav'
    },
    {
        id: 'circle',
    }
]

try {

    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);

        if (!blockObj.id) throw new Error(`в данных под номером ${i + 1} нет id`);

        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });
}
catch (e) {
    if (e.name === "SyntaxError") {
        console.log(e.message);
    }
    else throw e;
}