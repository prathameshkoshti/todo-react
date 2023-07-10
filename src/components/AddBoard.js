import React, { useState } from "react";
import { Button, Input, Modal } from "semantic-ui-react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { createBoard } from "../slices/board";

export default function AddBoard({ open, closeModal }) {
  const [boardName, setBoardName] = useState("");
  const dispatch = useDispatch();

  const newBoard = () => {
    dispatch(
      createBoard({
        name: boardName,
      }),
    );
    closeModal();
  };

  return (
    <Modal size="tiny" open={open} onClose={closeModal}>
      <Modal.Header>Add new board</Modal.Header>
      <Modal.Content>
        <Input
          value={boardName}
          onChange={(event) => setBoardName(event.target.value)}
          placeholder="Enter board name"
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={closeModal}>Cancel</Button>
        <Button positive onClick={newBoard}>
          Create
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

AddBoard.propTypes = {
  open: PropTypes.bool,
  closeModal: PropTypes.func,
};
