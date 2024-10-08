export class PriorityQueue {
    constructor() {
        this.items = [];
    }
    enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > queueElement.priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(queueElement);
        }

        this.displayQueue();
    }

    dequeue() {
        if (this.isEmpty()) {
            alert("Queue is empty!");
            return;
        }
        this.items.shift();
        this.displayQueue();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    displayQueue() {
        const queueElement = document.getElementById('queue');
        queueElement.innerHTML = '';

        for (let item of this.items) {
            const li = document.createElement('li');
            li.innerHTML = `${item.element} <span>${item.priority}</span>`;
            queueElement.appendChild(li);
        }
    }
}

const priorityQueue = new PriorityQueue();

function enqueue() {
    const elementInput = document.getElementById('element');
    const priorityInput = document.getElementById('priority');
    const element = elementInput.value;
    const priority = parseInt(priorityInput.value);

    if (element === '' || isNaN(priority)) {
        alert("Please enter a valid element and priority.");
        return;
    }

    priorityQueue.enqueue(element, priority);
    elementInput.value = '';
    priorityInput.value = '';
}

function dequeue() {
    priorityQueue.dequeue();
}
