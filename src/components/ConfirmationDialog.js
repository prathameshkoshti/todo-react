import React from "react";
import { Modal, Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { deleteBoardById } from "../slices/board";
import PropTypes from "prop-types";

export default function ConfirmationDialog({ closeModal, itemToDelete, type }) {
  const dispatch = useDispatch();

  const confirmDelete = () => {
    dispatch(deleteBoardById(itemToDelete._id));
    setTimeout(() => {
      closeModal();
    }, 1000);
  };

  return (
    <Modal open={itemToDelete?._id && type}>
      <Modal.Header>Confirmation</Modal.Header>
      <Modal.Content>
        Are you sure you want to delete {type}: {itemToDelete?.name}
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