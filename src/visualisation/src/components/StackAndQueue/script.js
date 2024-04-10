const stackContainer = document.getElementById('stack');
const queueContainer = document.getElementById('queue');
const elementValueInput = document.getElementById('push-text');

const stack = [];

// const queue = [];

function createDataItem(value) {
    const item = document.createElement('div');
    item.classList.add('data-item');
    item.textContent = value;
    return item;
}

function stackPush() {
    const value = elementValueInput.value
    if (value) {
        stack.push(value);
        const item = createDataItem(value);
        stackContainer.prepend(item); // Add to the top
        item.style.transform = 'translateY(-50px)'; // Slide in animation
        item.addEventListener('transitionend', () => item.style.transform = '');
    }
}

function stackPop() {

    if (stack.length === 0) {
        const item = document.createElement('div')
        stackContainer.prepend(item)
        item.classList.add('data-item')
        item.textContent = "Stack is empty!"

        return;
    }
    stack.pop();
    const item = stackContainer.firstChild;
    item.style.transform = 'translateY(50px)'; // Slide out animation
    item.addEventListener('transitionend', () => stackContainer.removeChild(item));
}


// Queue operations
//  enqueue and dequeue

document.getElementById('stackPush').addEventListener('click', stackPush);
document.getElementById('stackPop').addEventListener('click', stackPop);
