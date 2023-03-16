import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  DialogContentText,
} from "@mui/material";
import { Container } from "@mui/system";
import styled from "@emotion/styled";

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-bottom: 15px;
`;

const EditDialog = ({ user, isOpen, onClose, onSubmit }) => {
  const [editedUser, setEditedUser] = useState(user);

  const handleInputChange = (event) => {
    if (!event || !event.target) return;
    const { name, value } = event.target;
    setEditedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(editedUser);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Edit User</DialogTitle>
      <DialogContent>
        <DialogContentText style={{ overflowY: "scroll", maxHeight: 300 }}>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            required
            type="text"
            fullWidth
            value={editedUser.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email Address"
            required
            type="email"
            fullWidth
            value={editedUser.email}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="phone"
            label="Phone Number"
            required
            type="tel"
            fullWidth
            value={editedUser.phone}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="website"
            label="Website"
            required
            type="url"
            fullWidth
            value={editedUser.website}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="street/suite"
            label="Street/Suite"
            required
            type="text"
            fullWidth
            value={`${user.address.street}, ${user.address.suite}`}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="city/zipcode"
            label="City/Zipcode"
            required
            type="text"
            fullWidth
            value={`${user.address.city}, ${user.address.zipcode}`}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="company"
            label="Company"
            required
            type="text"
            fullWidth
            value={user.company.name}
            onChange={handleInputChange}
          />
        </DialogContentText>
      </DialogContent>
      <StyledContainer>
        <Button
          onClick={onClose}
          style={{
            border: "1px solid lightgray",
            backgroundColor: "#ececec",
            color: "gray",
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          style={{ backgroundColor: "#0a66c2", color: "white" }}
        >
          Ok
        </Button>
      </StyledContainer>
    </Dialog>
  );
};

export default EditDialog;
