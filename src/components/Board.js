import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function Board({ board }) {
    const [completedTodo, setCompletedTodo] = useState([]);
    const [pendingTodo, setPendingTodo] = useState([]);

    const sampleTodo = {
        id: 1,
        title: 'ABC',
        isComplete: true,
    }

    return (
        <Grid className='board' columns={3} divided>
            <Grid.Row>
                <Grid.Column width={4}>
                    <TodoList title="New Tasks" todos={pendingTodo} />
                </Grid.Column>
                <Grid.Column width={8}>
                    <AddTodo board={board} />
                </Grid.Column>
                <Grid.Column width={4}>
                    <TodoList title="Completed Tasks" todos={[sampleTodo]} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Board;