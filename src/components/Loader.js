import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";
import { useSelector } from "react-redux";

export default function LoadingScreen() {
  const { todo, board } = useSelector((state) => state);
  if (todo.loading || board.loading) {
    return (
      <Dimmer active>
        <Loader />
      </Dimmer>
    );
  } else return null;
}
