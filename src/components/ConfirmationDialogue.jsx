import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle  } from '@mui/material';

const ConfirmationDialogue = () => {
  return (
      <Dialog
          aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description' >
          <DialogTitle id="alert-dialog-title">
              {"Are you sure you want to delete this user?"}
          </DialogTitle>
          <DialogContent>This action cannot be undone.</DialogContent>
          <DialogActions>
              <Button color="primary">Cancel</Button>
              <Button color="primary">Delete</Button>
          </DialogActions>
     </Dialog>
  )
}

export default ConfirmationDialogue