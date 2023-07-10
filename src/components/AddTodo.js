import React, { useState } from "react";
import { Header, Input, Button, Icon } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { createTodo } from "../slices/todo";
import PropTypes from "prop-types";

const AddTodo = ({ board }) => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todo !== "") {
      dispatch(
        createTodo({
          name: todo,
        }),
      );
    } else {
      console.log("add input");
    }
  };

  return (
    <div className="add-todo">
      <Header className="board-name" size="medium">
        Viewing board: {board?.title}
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

AddTodo.propTypes = {
  board: PropTypes.object,
};

export default AddTodo;
