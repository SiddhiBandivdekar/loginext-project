import { Avatar } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

const AvatarIcon = styled(Avatar)`
  height: 156px;
  width: 166px;
  border-radius: 0;
`;
const UserAvatar = ({ username }) => {
  return (
    <AvatarIcon
      alt={username}
      src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
    />
  );
};

export default UserAvatar;
