import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import PropTypes from "prop-types";

function Board({ board }) {
  const [completedTodo, setCompletedTodo] = useState([]);
  const [pendingTodo, setPendingTodo] = useState([]);

  const todos = [];

  useEffect(() => {
    const completedTodo = [];
    const pendingTodo = [];

    todos.forEach((todo) => {
      if (todo.isComplete) {
        completedTodo.push(todo);
      } else {
        pendingTodo.push(todo);
      }
      setPendingTodo(pendingTodo);
      setCompletedTodo(completedTodo);
    });
  }, [todos]);

  return (
    <Grid className="board" columns={3} divided>
      <Grid.Row>
        <Grid.Column width={4}>
          <TodoList title="New Tasks" todos={pendingTodo} />
        </Grid.Column>
        <Grid.Column width={8}>
          <AddTodo board={board} />
        </Grid.Column>
        <Grid.Column width={4}>
          <TodoList title="Completed Tasks" todos={completedTodo} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

Board.propTypes = {
  board: PropTypes.object,
};

export default Board;
