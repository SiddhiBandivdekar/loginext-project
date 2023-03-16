import React from "react";
import { Typography } from "@mui/material";

const UserField = ({ value, icon: Icon }) => {
  return (
    <Typography variant="body1" component="p">
      <span
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "5px",
          color: "black",
        }}
      >
        {Icon && <Icon style={{ marginRight: "6px", color: "#767676" }} />}
        {value}
      </span>
    </Typography>
  );
};

export default UserField;
