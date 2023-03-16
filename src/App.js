import React, { useState, useEffect, createContext } from "react";
import { Container } from "@mui/system";
import ProfileList from "./components/ProfileList";
import { getUsers } from "./api";

export const UsersContext = createContext();

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <UsersContext.Provider value={{ users, loading, setUsers }}>
      <Container style={{ maxWidth: "1400px" }}>
        <ProfileList />
      </Container>
    </UsersContext.Provider>
  );
};

export default App;
