import React, { useState } from 'react';
import { Grid } from '@mui/material';
import ProfileCard from './ProfileCard';


const ProfileList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

  return (
      <Grid container spacing={4} justifyContent="center">
          {users.map((user) => (
              <Grid key={user.id} item xs={12} sm={6} md={4} lg={3}>
                  <ProfileCard key={user.id} user={user} onLike={handleLike} onEdit={handleEdit} onDelete={handleDelete} />
              </Grid>
          ))}
   </Grid>
  )
}

export default ProfileList