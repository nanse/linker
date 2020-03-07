import React from 'react';

// material-ui/core
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';

const TermsModal = ({
  sw = false,
  title,
  description,
  onConfirm,
  onCancel,
  confirmText = '확인',
  cancelText = '취소',
  fullWidth = true,
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
      fullWidth={fullWidth}
    >
      <DialogTitle id="alert-dialog-title" color="text">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" color="primary">
          <TextField
            id="outlined-multiline-static"
            fullWidth
            multiline
            defaultValue={description}
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onConfirm} color="secondary" autoFocus>
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

export default TermsModal;
