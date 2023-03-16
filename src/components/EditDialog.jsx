import React, { useState }  from 'react'
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material'


const EditDialog = ({ user, isOpen, onClose, onSubmit }) => {
    const [editedUser, setEditedUser] = useState(user);

    const handleInputChange = event => {
        
        if (!event || !event.target) return;
        const { name, value } = event.target;
        setEditedUser(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        onSubmit(editedUser);
        onClose();
    }

  return (
      <Dialog open={isOpen} onClose={onClose} >
          <DialogTitle>Edit User</DialogTitle>
          <DialogContent>
              <TextField autoFocus margin='dense' name='name' label="Name"
                  type="text" fullWidth value={editedUser.name} onChange={handleInputChange}
              />
              <TextField margin='dense' name='email' label="Email Address"
                  type="email" fullWidth value={editedUser.email} onChange={handleInputChange}
              />
              <TextField margin='dense' name='phone' label="Phone Number"
                  type="tel" fullWidth value={editedUser.phone} onChange={handleInputChange}
              />
          </DialogContent>

          <Button onClick={handleSubmit} color="primary">Save</Button>
          <Button onClick={onClose} color="secondary">Cancel</Button>
   </Dialog>
  )
}

export default EditDialog