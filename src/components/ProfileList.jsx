import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import { getUsers } from "../api";
import styled from "@emotion/styled";
import LoadingIndicator from "./Loading/LoadingIndicator";
import Snackbar from "@mui/material/Snackbar";

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
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setLoading(true);
    //Added 2 second delay, because the API was too fast and wasn't able to see the loading animation
    setTimeout(() => {
      getUsers().then((data) => {
        setUsers(data);
        setLoading(false);
      });
    }, 2000);
  }, []);

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
