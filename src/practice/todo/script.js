/**
 * This script manages a TODO list application.
 *
 * Features:
 * - Adds new tasks to the list.
 * - Removes tasks from the list when they are checked off.
 * - Displays a message when all tasks are completed.
 *
 * Elements:
 * - `list`: The unordered list (`<ul>`) that contains the tasks.
 * - `items`: The list items (`<li>`) within the `list`.
 * - `emptyListMessage`: The message displayed when there are no tasks.
 * - `newItemForm`: The form used to add new tasks.
 * - `newItemTitle`: The input field for the new task description.
 * - `taskTemplate`: The template for a new task item.
 * - `newItemTemplate`: The cloned template for a new task item.
 * - `input`: The input field for the new task description.
 *
 * Functions:
 * - `toggleEmptyListMessage`: Shows or hides the empty list message based on the number of tasks.
 * - `addCheckHandler`: Adds an event listener to a task item to remove it when checked off.
 *
 * Event Listeners:
 * - `submit` event on `newItemForm`: Adds a new task to the list.
 */
const list = document.querySelector('.todo-list');
const items = list.children;
const emptyListMessage = document.querySelector('.empty-tasks');
const newItemForm = document.querySelector('.add-form');
const newItemTitle = newItemForm.querySelector('.add-form-input');
const taskTemplate = document.querySelector('#task-template').content;
const newItemTemplate = taskTemplate.querySelector('.todo-list-item');
const input = document.querySelector('.add-form-input');

const toggleEmptyListMessage = function () {
    if (items.length === 0) {
        emptyListMessage.classList.remove('hidden');
    }
};

const addCheckHandler = function (item) {
    const checkbox = item.querySelector('.todo-list-input');
    checkbox.addEventListener('change', function () {
        item.remove();
        toggleEmptyListMessage();
    });
};

for (let i = 0; i < items.length; i++) {
    addCheckHandler(items[i]);
}

newItemForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const taskText = newItemTitle.value;
    const task = newItemTemplate.cloneNode(true);
    const taskDescription = task.querySelector('span');
    taskDescription.textContent = taskText;
    addCheckHandler(task)
    list.appendChild(task);
    input.value = '';
});
