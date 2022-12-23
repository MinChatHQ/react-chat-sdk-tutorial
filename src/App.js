import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { MainContainer, ChatContainer, MessageList, Message, MessageInput } from "@chatscope/chat-ui-kit-react";
import { useMinChat, useMessages } from '@minchat/react';

const secondUser = {
  id: "mercy",
  name: "Mercy Wells",
}

function App() {
  const minchat = useMinChat()

  const chat = minchat.chat(secondUser)

  const { messages, sendMessage } = useMessages(chat)
  return (
    <div style={{ position: "relative", height: "500px", width: "500px" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList>
            {messages && messages.map((message) => {
              return message.user.id === 'mercy' ?
                <Message
                  model={{
                    message: message.text,
                    sender: message.user.name,
                  }}
                /> :
                <div style={{ justifyContent: "flex-end", display: "flex" }}>
                  <Message
                    model={{
                      message: message.text,
                      sender: message.user.name,
                    }}
                  />
                </div>
            })
            }

          </MessageList>
          <MessageInput
            onSend={(_, textContent) => sendMessage({ text: textContent })}
            placeholder="Type message here" />
        </ChatContainer>
      </MainContainer>
    </div>
  );
}

export default App;
