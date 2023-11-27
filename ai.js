const chatContainer = document.getElementById('chatContainer');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

function addMessageToChat(message, isUserMessage) {
  const messageElement = document.createElement('div');
  messageElement.textContent = message;

  if (isUserMessage) {
    messageElement.classList.add('userMessage');
  } else {
    messageElement.classList.add('botMessage');
  }

  chatContainer.appendChild(messageElement);

  // Scroll to the bottom of the chat container
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function handleUserInput() {
  const userMessage = userInput.value;
  addMessageToChat(userMessage, true);
  userInput.value = '';

  // Make API request to the third-party ChatGPT API service
  fetch('https://api.example.com/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: userMessage })
  })
    .then(response => response.json())
    .then(data => {
      const botMessage = data.message;
      addMessageToChat(botMessage, false);
    })
    .catch(error => {
      console.error('Error:', error); 
    });
}

// Add event listener to handle user input
sendButton.addEventListener('click', handleUserInput);
userInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    handleUserInput();
  }
});

