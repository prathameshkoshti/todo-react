import React from "react";
import { Modal, Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { deleteBoard } from "../slices/board";
import PropTypes from "prop-types";
import { deleteTodo } from "../slices/todo";

export default function ConfirmationDialog({ closeModal, itemToDelete, type }) {
  const dispatch = useDispatch();

  const confirmDelete = () => {
    if (type === "board") {
      dispatch(deleteBoard(itemToDelete._id));
    } else {
      dispatch(deleteTodo(itemToDelete._id));
    }
    setTimeout(() => {
      closeModal();
    }, 1000);
  };

  return (
    <Modal open={itemToDelete?._id && type}>
      <Modal.Header>Confirmation</Modal.Header>
      <Modal.Content>
        Are you sure you want to delete {type}:{" "}
        {itemToDelete?.name || itemToDelete?.desc}
        <br />
        {type === "board"
          ? "This will also delete corresponding todo items."
          : null}
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={closeModal}>Cancel</Button>
        <Button positive onClick={confirmDelete}>
          Confirm
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

ConfirmationDialog.propTypes = {
  closeModal: PropTypes.func,
  itemToDelete: PropTypes.object,
  type: PropTypes.string,
};
