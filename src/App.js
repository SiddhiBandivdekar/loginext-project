import React, { useState } from 'react';
import { Container } from '@mui/system';
import ProfileList from './components/ProfileList';

const App = () => {

  return (
    <Container maxWidth="md">
      <ProfileList />
    </Container>
  )
}

export default App