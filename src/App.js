import React, { useState } from 'react';
import { Container } from '@mui/system';
import ProfileList from './components/ProfileList';

const App = () => {
  return (
    <Container style={{maxWidth: "1400px"}}>
      <ProfileList />
    </Container>
  )
}

export default App