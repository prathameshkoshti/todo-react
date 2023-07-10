import React from "react";
import { Checkbox, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";

const Todo = ({ todo }) => {
  const completeTodo = () => {};

  return (
    <div className="todo">
      {todo.isComplete ? (
        todo.title
      ) : (
        <Checkbox onChange={completeTodo} label={todo.title} />
      )}
      <Icon name="close" onClick={() => {}} />
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.object,
};

export default Todo;
