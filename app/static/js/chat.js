const socket = new WebSocket(`ws://localhost:8000/api/users/ws/${user_id}`);

socket.onopen = function () {
    console.log('WebSocket connection established');
};

socket.onmessage = function (event) {
    const message = JSON.parse(event.data);
    // Handle received message
    console.log('Received message:', message);
};

socket.onclose = function () {
    console.log('WebSocket connection closed');
};

const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');

chatForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const message = messageInput.value;
    // Send message
    socket.send(JSON.stringify({ sender_id: user_id, recipient_id: recipient_id, content: message }));
    messageInput.value = '';
});
