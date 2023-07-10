import React, { useEffect, useState } from "react";
import { Icon, Tab } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import Board from "../components/Board";
import AddBoard from "../components/AddBoard";
import { fetchBoards } from "../slices/board";
import uuid from "react-uuid";
import ConfirmationDialog from "../components/ConfirmationDialog";

const Boards = () => {
  const [panes, setPanes] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [open, setOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const dispatch = useDispatch();

  const boards = useSelector((state) => state.board);

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  const deleteBoard = (event, id) => {
    event.stopPropagation();
    const board = boards.list.find((board) => board._id === id);
    setItemToDelete(board);
  };

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const closeDeleteModal = () => {
    setItemToDelete(null);
  };

  const handleChange = (e, data) => {
    setActiveTab(data.activeIndex);
  };

  useEffect(() => {
    const panes = boards?.list.map((board) => {
      return {
        menuItem: {
          key: board.id,
          content: (
            <div className="tab" key={uuid()}>
              {board.name}
              <Icon
                name="close"
                size="small"
                onClick={(event) => deleteBoard(event, board._id)}
              />
            </div>
          ),
        },
      };
    });

    panes.push({
      menuItem: {
        key: "create-board-tab",
        content: (
          <div className="tab add-new-tab" onClick={openModal}>
            <Icon name="plus" size="small" />
            Add new board
          </div>
        ),
      },
    });

    setPanes(panes);
  }, [boards]);

  useEffect(() => {
    // dispatch();
  }, [panes, activeTab]);

  return (
    <>
      <Tab
        className="tabs"
        defaultActiveIndex={activeTab}
        panes={panes}
        onTabChange={handleChange}
      />
      <Board board={boards[activeTab]} />
      <AddBoard closeModal={closeModal} open={open} />
      {itemToDelete && (
        <ConfirmationDialog
          closeModal={closeDeleteModal}
          itemToDelete={itemToDelete}
          type="board"
        />
      )}
    </>
  );
};

export default Boards;
