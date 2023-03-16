import React from "react";
import { TextField } from "@mui/material";

const TextFieldTemplates = ({ name, label, type, value, onChange }) => {
  return (
    <TextField
      margin="dense"
      name={name}
      label={label}
      required
      type={type}
      fullWidth
        value={value}
          onChange={onChange}
    />
  );
};

export default TextFieldTemplates;
