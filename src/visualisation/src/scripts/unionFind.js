const visualization = document.getElementById('visualization');
const findButton = document.getElementById('find');
const unionButton = document.getElementById('union');
const elementValueInput = document.getElementById('element-value');
const elementUnion1 = document.getElementById('elementUnion1')
const elementUnion2 = document.getElementById('elementUnion2')
// const moveButton = document.getElementById('move')
const result = document.getElementById('result')

let disjointSets = {};
let resultSet = {}
console.log('log from unionFind.js');
{
    for (let i = 0; i < 12; i++) {
        disjointSets[i] = {parent: i, rank: 0};
        updateVisualization();
    }
}

function moveElements(value) {
    delete disjointSets[value];
    resultSet[value] = {parent: value, rank: 0};
    updateVisualization();
}

function find(value) {
    if (disjointSets[value].parent !== value) {
        value = find(disjointSets[value].parent)
    }
    const element = document.getElementById(value);
    if (element) {
        element.classList.add('found');
        // Highlight the root as well
        const rootElement = document.getElementById(find(value));
        if (rootElement) {
            rootElement.classList.add('found');
        }
    }
    return value;
}

function union(value1, value2) {
    const root1 = find(value1);
    const root2 = find(value2);

    if (root1 === root2) return

    // Union by rank optimization:
    if (disjointSets[root1].rank < disjointSets[root2].rank) {
        disjointSets[root1].parent = root2;
    } else if (disjointSets[root1].rank > disjointSets[root2].rank) {
        disjointSets[root2].parent = root1;
    } else {
        disjointSets[root2].parent = root1;
        disjointSets[root1].rank++;
    }
    updateVisualization();
}

function updateVisualization() {
    visualization.innerHTML = '';
    result.innerHTML = '';

    for (const value in disjointSets) {
        const set = document.createElement('div');
        set.classList.add('set');

        const node = document.createElement('div');
        node.classList.add('node');
        node.textContent = value;

        if (disjointSets[value].parent === value) {
            node.classList.add('parent');
        }

        set.appendChild(node);
        visualization.appendChild(set);
    }

    for (const value in resultSet) {
        const set = document.createElement('div');
        set.classList.add('set');

        const node = document.createElement('div');
        node.classList.add('node');
        node.textContent = value;

        if (resultSet[value].parent === value) {
            node.classList.add('parent');
        }

        set.appendChild(node);
        result.appendChild(set);
    }
}


findButton.addEventListener('click', () => {
    const value = elementValueInput.value;
    const messageContainer = document.getElementById('message-container');
    const mc = document.createElement('div');

    if (value) {
        const root = find(value);

        if (root) {
            const foundNode = visualization.childNodes[root]
            foundNode.classList.add('found')
            setTimeout(() => {
                foundNode.classList.remove('found');
            }, 1000);

            mc.classList.add('message-container');
            mc.textContent = `Element ${value} belongs to set with root: ${root}`;

        } else {
            mc.classList.add('message-container');
            mc.textContent = `Element ${value} is not present in any set.`;
        }
        messageContainer.appendChild(mc)
    }

});

unionButton.addEventListener('click', () => {
        const value1 = elementUnion1.value;
        const value2 = elementUnion2.value;
        const messageContainer = document.getElementById('message-container');
        const mc = document.createElement('div');

        if (value1 && value2) {
            union(value1, value2);
            mc.classList.add('message-container');
            mc.textContent = `Union ${value1} and ${value2}`;
            const item1 = visualization.childNodes[value1]
            const item2 = visualization.childNodes[value2]
            item1.classList.add('united')
            setTimeout(() => {
                item2.classList.add('united')
            }, 500)

            setTimeout(() => {
                item1.classList.remove('united')
                item2.classList.remove('united')
            }, 1500)

        } else {
            messageContainer.textContent = `Please enter the first element for union.`
        }
        messageContainer.appendChild(mc)
    }
);

// moveButton.addEventListener('click', () => {
//     const value = elementValueInput.value;
//     if (value) {
//         moveElements(value)
//         console.log(value)
//     }
// })
