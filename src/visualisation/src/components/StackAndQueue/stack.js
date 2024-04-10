const stackContainer = document.getElementById('stack');
const elementValueInput = document.getElementById('push-text');

const stack = [];

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
    stack.pop();
    const item = stackContainer.firstChild;
    item.style.transform = 'translateY(50px)'; // Slide out animation
    item.addEventListener('transitionend', () => stackContainer.removeChild(item));
}

document.getElementById('stackPush').addEventListener('click', stackPush);
document.getElementById('stackPop').addEventListener('click', stackPop);