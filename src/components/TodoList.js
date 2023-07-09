import React from 'react';
import Todo from './Todo';
import { Header, Divider } from 'semantic-ui-react';

function TodoList({ title, todos }) {
    return (
        <>
            <Header className='section-header' size="small">{title}</Header>
            <Divider className='no-spacing' />
            <div className='todo-list'>
                {todos.map(todo => (
                <>
                    <Todo todo={todo} />
                    <Divider />
                </>))}
            </div>
        </>
    )
}

export default TodoList;