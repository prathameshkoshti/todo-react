import React, { useEffect, useState, useRef } from 'react';
import { Icon, Tab } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import Board from '../components/Board';

const boards = [
    {
        id: 1,
        title: 'Board1',
    },
    {
        id: 2,
        title: 'Board2',
    },
    {
        id: 3,
        title: 'Board3',
    },
    {
        id: 4,
        title: 'Board4',
    },
    {
        id: 5,
        title: 'Board5',
    },
]
const Boards = ({  }) => {

    const [panes, setPanes] = useState([]);
    const [activetab, setActiveTab] = useState(0);

    const deleteBoard = (event, id) => {
        event.stopPropagation();
        console.log(id);
    }

    const createNewBoard = () => {

    }

    const handleChange = (e, data) => {
        setActiveTab(data.activeIndex);
    }

    useEffect(() => {
        const panes = boards.map((board, index) => {
            return ({
                menuItem: {
                    key: board.id,
                    content: (
                        <div className='tab'>
                            {board.title}
                            <Icon name='close' size='small' onClick={(event) => deleteBoard(event, board.id)} />
                        </div>
                    )
                },
            })
        });

        setPanes(panes);
    }, [boards]);

    return (
        <>
            <Tab className="tabs" defaultActiveIndex={activetab} ref={boards} panes={panes} onTabChange={handleChange} />
            <Board board={boards[activetab]} />
        </>
    )
}

export default Boards;