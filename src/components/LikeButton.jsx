import React, { useState } from "react";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styled from "@emotion/styled";

const StyledIconButton = styled(IconButton)`
  && {
    padding: 10px;
    margin: 0;
    border-radius: 50%;
    color: red;
    &:hover {
      background-color: #ececec;
    }
  }
`;

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked((prevState) => !prevState);
  };

  return (
    <StyledIconButton onClick={handleClick}>
      {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </StyledIconButton>
  );
};

export default LikeButton;
