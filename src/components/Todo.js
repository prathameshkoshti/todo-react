import React from 'react';
import { Checkbox, Icon, Divider } from 'semantic-ui-react';

const Todo = ({ todo }) => {
    return (
        <div className='todo'>
            {
                todo.isComplete ?
                todo.title : (<Checkbox onChange={(event) => {}} label={todo.title} />)
            }
            <Icon name="close" onClick={() => {}} />
        </div>
    );
}

export default Todo;