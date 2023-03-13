import { useState } from "react";
import { Message } from "../models/Message";
import { Schema } from "../models/Schema";
import { User } from "../models/User";
import ChatBar from "./ChatBar";
import MessageComponent from "./Message";
import SchemaSelect from "./SchemaSelect";

export default function ChatLayout() {
  let users: User[] = [
    { name: "Germain", id: "1" },
    { name: "Loic", id: "2" },
  ];
  let [currentUser, setCurrentUser] = useState(0);
  let [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Hello", user: users[0] },
    { id: "2", text: "Hello", user: users[1] },
  ]);
  let schemas: Schema[] = [
    { id: "1", name: "Schema 1" },
    { id: "2", name: "Schema 2" },
  ];

  return (
    <>
      <div>ChatLayout</div>
      {messages.map((message) => (
        <MessageComponent sender={message.user} text={message.text} />
      ))}
      <SchemaSelect
        schemas={schemas}
        onChange={function (schema: Schema): void {
          throw new Error("Function not implemented.");
        }}
      />
      <ChatBar
        onEnter={(text) => {
          setMessages([
            ...messages,
            { id: "3", text: text, user: { ...users[currentUser] } },
          ]);
          if (currentUser === 0) {
            setCurrentUser(1);
          } else {
            setCurrentUser(0);
          }
        }}
      />
    </>
  );
}
