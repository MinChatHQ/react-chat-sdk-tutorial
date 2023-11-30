import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { MainContainer, ChatContainer, MessageList, Message, MessageInput } from "@chatscope/chat-ui-kit-react";
import { useMinChat, useMessages } from '@minchat/react';
import { useEffect, useState } from "react";

  function App() {
    const [secondUser, setSecondUser] = useState()
    const [chat,setChat] = useState()

    const minchat = useMinChat()

    useEffect(() => {
      async function createUser() {
        if (minchat) {
          const user = await minchat.createUser({
            username: "mercy",
            name: "Mercy Wells",
          })

          console.log({user})

          setSecondUser(user)

          // create chat object
          const chatObj = await minchat.chat(user.username)
          setChat(chatObj)
        }
      }

      createUser()

    }, [minchat])


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
