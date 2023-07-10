import React from "react";
import Todo from "./Todo";
import { Header, Divider } from "semantic-ui-react";
import PropTypes from "prop-types";
import uuid from "react-uuid";

function TodoList({ title, todoList }) {
  return (
    <>
      <Header className="section-header" size="small">
        {title}
      </Header>
      <Divider className="no-spacing" />
      <div className="todo-list">
        {todoList.map((todo) => (
          <div key={uuid()}>
            <Todo todo={todo} />
            <Divider />
          </div>
        ))}
      </div>
    </>
  );
}

TodoList.propTypes = {
  title: PropTypes.string,
  todoList: PropTypes.array,
};

export default TodoList;
