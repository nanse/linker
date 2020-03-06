import React from 'react';

// material-ui/core
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

const AskModal = ({
  sw = false,
  title,
  description,
  onConfirm,
  onCancel,
  confirmText = '확인',
  cancelText = '취소',
  showCancelbutton = true,
}) => {
  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      open={sw}
      onClose={onCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onConfirm} color="primary" autoFocus>
          {confirmText}
        </Button>
        {showCancelbutton && (
          <Button onClick={onCancel} color="primary">
            {cancelText}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default AskModal;
