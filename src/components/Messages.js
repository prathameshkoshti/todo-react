import React from "react";
import { Message } from "semantic-ui-react";
import uuid from "react-uuid";

export default function Messages() {
  const messages = [];

  return messages.map((message) => {
    return <Message key={uuid()}>{message.content}</Message>;
  });
}
