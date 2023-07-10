import React from "react";
import { Message } from "semantic-ui-react";
import { useSelector } from "react-redux";

export default function Msg() {
  const state = useSelector((state) => state.message);
  if (state.type && state.message) {
    return (
      <Message
        error={state.type === "error"}
        success={state.type === "success"}
        className="message"
      >
        {state.message}
      </Message>
    );
  } else return null;
}
