import React from "react";
import { Checkbox, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";
import { completeTodo } from "../slices/todo";
import { useDispatch } from "react-redux";

const Todo = ({ todo, deleteTask }) => {
  const dispatch = useDispatch();

  const markAsDone = () => {
    dispatch(completeTodo(todo._id));
  };

  const deleteTodo = () => {
    deleteTask(todo);
  };

  return (
    <div className="todo">
      {todo.isComplete ? (
        todo.desc
      ) : (
        <Checkbox onChange={markAsDone} label={todo.desc} />
      )}
      <Icon name="close" onClick={deleteTodo} />
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.object,
  deleteTask: PropTypes.func,
};

export default Todo;
