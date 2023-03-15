import React from 'react';
import { Avatar } from '@mui/material';

const Avatar = ({username}) => {
  return (
    <Avatar alt={username} src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`} />
  )
}

export default Avatar