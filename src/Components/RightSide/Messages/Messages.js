import React, { useState } from 'react';
import Style from './Messages.module.css';

function Messages(props) {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  
  const {user} = props;
  // console.log(user);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const newMessage = { id: chat.length + 1, sender: 'me', message };
      setChat([...chat, newMessage]);
      setMessage('');
    }
  };

  return (
    <div className={Style.chatWindow}>
      <div className={Style.chatHeader}>
        <img src={user.dp} alt="Profile" className={Style.profileImage} />
        <h2 className={Style.profileName}>{user.name}</h2>
      </div>
      <div className={Style.messageContainer}>
        {chat.map((message) => (
          <div
            key={message.id}
            className={`${Style.message} ${message.sender === 'me' ? Style.myMessage : Style.senderMessage}`}
          >
            {message.message}
          </div>
        ))}
      </div>
      <div className={Style.chatInputContainer}>
        <textarea
          className={Style.chatInput}
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className={Style.sendButton} onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Messages;
