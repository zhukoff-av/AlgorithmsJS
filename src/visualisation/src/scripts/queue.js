const queueContainer = document.getElementById('queue');
const elementValueInput = document.getElementById('push-text');

const queue = [];

function createDataItem(value) {
    const item = document.createElement('div');
    item.classList.add('data-item');
    item.textContent = value;
    return item;
}

function enqueue() {
    const value = elementValueInput.value
    if (value) {
        queue.push(value);
        const item = createDataItem(value);
        queueContainer.prepend(item); // Add to the top
        item.style.transform = 'translateY(-50px)'; // Slide in animation
        item.addEventListener('transitionend', () => item.style.transform = '');
    }
}

function dequeue() {
    queue.pop();
    const item = queueContainer.lastChild;
    item.style.transform = 'translateY(50px)'; // Slide out animation
    item.addEventListener('transitionend', () => queueContainer.removeChild(item));
}

document.getElementById('enqueue').addEventListener('click', enqueue)
document.getElementById('dequeue').addEventListener('click', dequeue)