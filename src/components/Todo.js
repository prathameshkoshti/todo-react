import React from "react";
import { Checkbox, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";

const Todo = ({ todo }) => {
  const completeTodo = () => {};

  return (
    <div className="todo">
      {todo.isComplete ? (
        todo.desc
      ) : (
        <Checkbox onChange={completeTodo} label={todo.desc} />
      )}
      <Icon name="close" onClick={() => {}} />
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.object,
};

export default Todo;
