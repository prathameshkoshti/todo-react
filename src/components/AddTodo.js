import React, { useState } from "react";
import { Header, Input, Button, Icon } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../slices/todo";
import PropTypes from "prop-types";

const AddTodo = ({ board }) => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();
  const selectedBoard = useSelector((state) => state.todo.selectedBoard);

  const handleAddTodo = () => {
    if (todo !== "") {
      dispatch(
        createTodo({
          desc: todo,
          boardId: selectedBoard,
        }),
      );
      setTodo("");
    } else {
      console.log("add input");
    }
  };

  return (
    <div className="add-todo inverted">
      <Header className="board-name" size="medium">
        {board?.name}
      </Header>
      <Input
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        type="text"
        placeholder="Add new todo"
        action
      >
        <input />
        <Button onClick={handleAddTodo} color="black" type="submit">
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
