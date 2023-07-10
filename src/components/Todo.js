import React from "react";
import { Checkbox, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";
import { completeTodo } from "../slices/todo";
import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const markAsDone = () => {
    dispatch(completeTodo(todo._id));
  };

  return (
    <div className="todo">
      {todo.isComplete ? (
        todo.desc
      ) : (
        <Checkbox onChange={markAsDone} label={todo.desc} />
      )}
      <Icon name="close" onClick={() => {}} />
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.object,
};

export default Todo;
