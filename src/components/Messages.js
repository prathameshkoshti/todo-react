import React from "react";
import { Message } from "semantic-ui-react";
import uuid from "react-uuid";

export default function Message() {
  return <Message key={uuid()}>{message.content}</Message>;
}
