/*

You need to programme a messenger. How the programme should work:

- The message template is in the template tag with the identifier message-template.

- The message block (chat-message class) should contain the message text, delete button and username.

- The new message is added to the end of the container with class chat-content.

- To add a new message, you need to enter text in the input field (element with class chat-form-input) and click the ‘Send’ button (sends data from the form with class chat-form).

- To delete a message, you need to click on the button with a cross (element with class chat-message-button). This button appears when you hover over a message.
*/


const template = document.querySelector('#message-template').content
const input = document.querySelector('.chat-form-input');
const form = document.querySelector('.chat-form');
const chatContent = document.querySelector('.chat-content');

form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    // Get the input value
    const messageText = input.value.trim();
    if (!messageText) return; // Prevent adding empty messages

    // Clone the template and fill in the message content
    const message = template.cloneNode(true);
    const messageDescription = message.querySelector('.chat-message-text');
    messageDescription.textContent = messageText;

    // Append the message to the chat container
    chatContent.appendChild(message);

    // Clear the input field
    input.value = '';
});

// Event delegation for removing messages
chatContent.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('chat-message-button')) {
        const messageElement = evt.target.closest('.chat-message');
        if (messageElement) {
            messageElement.remove();
        }
    }
});