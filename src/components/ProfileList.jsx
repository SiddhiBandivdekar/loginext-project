import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import { getUsers } from "../api";
import styled from "@emotion/styled";
import LoadingIndicator from "./Loading/LoadingIndicator";

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

  useEffect(() => {
    setLoading(true);
    getUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleUpdateUser = (updatedUser) => {
    const updatedUsers = users.map((user) => {
      if (user.id === updatedUser.id) {
        return updatedUser;
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const handleEdit = (user) => {
    const updatedUsers = users.map((u) => {
      if (u.id === user.id) {
        return {
          ...u,
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
          website: user.website,
          address: {
            ...u.address,
            street: user.address.street,
            suite: user.address.suite,
            city: user.address.city,
            zipcode: user.address.zipcode,
          },
          company: {
            ...u.company,
            name: user.company.name,
          },
        };
      }
      return u;
    });
    setUsers(updatedUsers);
  };

  const handleLike = (id) => {
    const user = users.find((user) => user.id === id);

    user.liked = !user.liked;

    setUsers(users.map((i) => (i.id === id ? user : i)));
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
                onEdit={handleEdit}
                onDelete={handleDelete}
                onLike={handleLike}
                onUpdate={handleUpdateUser}
              />
            </CardWrapper>
          ))}
        </CardContainer>
      )}
    </>
  );
};

export default ProfileList;
