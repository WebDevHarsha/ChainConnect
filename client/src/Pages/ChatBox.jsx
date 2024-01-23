import React, { useEffect } from 'react';
import io from 'socket.io-client';


function ChatBox() {
  useEffect(() => {
    const socket = io();

    const messageInput = document.getElementById('message-input');
    const chatForm = document.getElementById('chat-form');
    const chatMessages = document.getElementById('chat-messages');

    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const message = messageInput.value.trim();
      if (message !== '') {
        socket.emit('chat message', message);
        messageInput.value = '';
      }
    });

    socket.on('chat message', (message) => {
      const messageElement = document.createElement('li');
      messageElement.textContent = message;
      chatMessages.appendChild(messageElement);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    });

    return () => {
      // Cleanup logic if needed
      socket.disconnect();
    };
  }, []); // Empty dependency array ensures that the effect runs once on component mount

  return (
    
    <div>
      <main>
        <div id="chat-container">
          <ul id="chat-messages"></ul>
          <form id="chat-form">
            <input type="text" id="message-input" placeholder="Type your message" />
            <button type="submit">Send</button>
          </form>
        </div>
      </main>
    </div>
  
  );
}

export default ChatBox;