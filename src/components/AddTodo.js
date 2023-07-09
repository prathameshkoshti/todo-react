import React, { useState } from "react";
import { Header, Input, Button, Icon } from "semantic-ui-react";

const AddTodo = ({ board }) => {
  const [todo, setTodo] = useState("");

  const handleAddTodo = (event) => {
    if (todo !== "") {
      console.log(event, todo);
    } else {
      console.log("add input");
    }
  };

  return (
    <div className="add-todo">
      <Header className="board-name" size="medium">
        Viewing board: {board.title}
      </Header>
      <Input
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        type="text"
        placeholder="Add new todo"
        action
      >
        <input />
        <Button onClick={handleAddTodo} primary type="submit">
          <Icon name="add" />
          Add
        </Button>
      </Input>
    </div>
  );
};

export default AddTodo;
