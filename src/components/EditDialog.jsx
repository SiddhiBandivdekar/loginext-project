import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  DialogContentText,
} from "@mui/material";
import { Container } from "@mui/system";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-bottom: 15px;
`;

const TEXT_FIELDS = [
  { name: "name", label: "Name", type: "text" },
  {
    name: "email",
    label: "Email Address",
    type: "email",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
  },
  {
    name: "website",
    label: "Website",
    type: "url",
  },
  {
    name: "street",
    label: "Street",
    type: "text",
  },
  {
    name: "suite",
    label: "Suite",
    type: "text",
  },
  {
    name: "city",
    label: "City",
    type: "text",
  },
  {
    name: "zipcode",
    label: "Zipcode",
    type: "text",
  },
  {
    name: "companyName",
    label: "Company",
    type: "text",
  },
];

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
          {TEXT_FIELDS.map(({ name, label, type }) => (
            <TextField
              autoFocus
              margin="dense"
              name={name}
              required
              label={label}
              type={type}
              fullWidth
              value={editedUser[name]}
              onChange={handleInputChange}
            />
          ))}
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
