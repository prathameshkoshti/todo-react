import React, { useEffect, useState } from "react";
import { Icon, Tab } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import Board from "../components/Board";
import AddBoard from "../components/AddBoard";
import { fetchBoards } from "../slices/board";
import uuid from "react-uuid";
import ConfirmationDialog from "../components/ConfirmationDialog";
import { fetchTodo } from "../slices/todo";
import Message from "../components/Message";
import Loader from "../components/Loader";

const Boards = () => {
  const [panes, setPanes] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [open, setOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [deleteType, setDeleteType] = useState("");
  const dispatch = useDispatch();

  const boards = useSelector((state) => state.board);

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  const deleteBoard = (event, id) => {
    event.stopPropagation();
    const board = boards.list.find((board) => board._id === id);
    setItemToDelete(board);
    setDeleteType("board");
  };

  const deleteTodo = (todo) => {
    setItemToDelete(todo);
    setDeleteType("todo");
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
          key: board._id,
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
          onClick: handleChange,
        },
      };
    });

    panes.push({
      menuItem: {
        key: "create-board-tab",
        content: (
          <div className="tab add-new-tab">
            <Icon name="plus" size="small" />
            Add new board
          </div>
        ),
        onClick: openModal,
      },
    });

    setPanes(panes);
  }, [boards]);

  useEffect(() => {
    const boardId = boards.list.length && boards.list[activeTab]?._id;
    if (boardId) {
      dispatch(fetchTodo(boardId));
    }
  }, [panes, activeTab]);

  return (
    <>
      <Tab
        className="tabs"
        defaultActiveIndex={activeTab}
        panes={panes}
        onTabChange={handleChange}
        menu={{ pointing: true }}
      />
      {boards.list.length ? (
        <Board deleteTodo={deleteTodo} board={boards?.list[activeTab]} />
      ) : null}
      <AddBoard closeModal={closeModal} open={open} />
      {itemToDelete && (
        <ConfirmationDialog
          closeModal={closeDeleteModal}
          itemToDelete={itemToDelete}
          type={deleteType}
        />
      )}
      <Message />
      <Loader />
    </>
  );
};

export default Boards;
