import React, { useState, useContext } from "react";
import ProfileCard from "./ProfileCard";
import styled from "@emotion/styled";
import LoadingIndicator from "./Loading/LoadingIndicator";
import Snackbar from "@mui/material/Snackbar";
import { UsersContext } from "../App";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 25px 0;
  gap: 30px;
  width: 100%;
`;

const CardWrapper = styled.div`
  margin-bottom: 15px;
`;

const ProfileList = () => {
  const { users, setUsers, loading } = useContext(UsersContext);

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    handleClick();
    setMessage("Information deleted successfully");
  };

  const handleUpdateUser = (updatedUser) => {
    const updatedUsers = users.map((user) => {
      if (user.id === updatedUser.id) {
        return updatedUser;
      }
      return user;
    });
    setUsers(updatedUsers);
    handleClick();
    setMessage("Information updated successfully!!");
  };
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <CardContainer>
          {users.map((user) => (
            <CardWrapper key={user.id}>
              <ProfileCard
                key={user.id}
                user={user}
                onDelete={handleDelete}
                onUpdate={handleUpdateUser}
              />
            </CardWrapper>
          ))}
          <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
            message={message}
          />
        </CardContainer>
      )}
    </>
  );
};

export default ProfileList;
