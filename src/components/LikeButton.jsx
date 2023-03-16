import React, { useState } from 'react'
import { IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styled from '@emotion/styled';

const StyledIconButton = styled(IconButton)`
&& {
    padding: 0;
    margin: 0;
    border-radius: 50%;
    color: red;
    &:hover {
      background-color: transparent;
    }
  }
`

const LikeButton = () => {
    const [isLiked, setIsLiked] = useState(false);

    const handleClick = () => {
        setIsLiked(prevState => !prevState);
    }

  return (
      <StyledIconButton color={isLiked ? "secondary" : "default"} onClick={handleClick} >
          {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
   </StyledIconButton>
  )
}

export default LikeButton