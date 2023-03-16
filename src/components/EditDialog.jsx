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
import TextFieldTemplates from "./TextFieldTemplates";

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
    if (name.startsWith("address.")) {
      setEditedUser((prevState) => ({
        ...prevState,
        address: {
          ...prevState.address,
          [name.split(".")[1]]: value,
        },
      }));
    } else if (name === "companyName") {
      setEditedUser((prevState) => ({
        ...prevState,
        company: {
          ...prevState.company,
          name: value,
        },
      }));
    } else {
      setEditedUser((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
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
          <TextFieldTemplates
            autoFocus
            name="name"
            label="Name"
            type="text"
            value={editedUser.name}
            onChange={handleInputChange}
          />
          <TextFieldTemplates
            name="email"
            label="Email Address"
            type="email"
            value={editedUser.email}
            onChange={handleInputChange}
          />
          <TextFieldTemplates
            name="phone"
            label="Phone Number"
            type="tel"
            value={editedUser.phone}
            onChange={handleInputChange}
          />
          <TextFieldTemplates
            name="website"
            label="Website"
            type="url"
            value={editedUser.website}
            onChange={handleInputChange}
          />
          <TextFieldTemplates
            name="address.street"
            label="Street"
            type="text"
            value={editedUser.address.street}
            onChange={handleInputChange}
          />
          <TextFieldTemplates
            name="address.suite"
            label="Suite"
            type="text"
            value={editedUser.address.suite}
            onChange={handleInputChange}
          />
          <TextFieldTemplates
            name="address.city"
            label="City"
            type="text"
            value={editedUser.address.city}
            onChange={handleInputChange}
          />
          <TextFieldTemplates
            name="address.zipcode"
            label="Zipcode"
            type="text"
            value={editedUser.address.zipcode}
            onChange={handleInputChange}
          />
          <TextFieldTemplates
            name="companyName"
            label="Company"
            type="text"
            value={editedUser.company.name}
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
