import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const StyledTextField = styled(TextField)`
  width: 100%;
  & input {
    text-align: center;
  }
`;

export default function Input({ handleChange, ...rest }) {
  const [value, setValue] = useState("");
  return (
    <StyledTextField
      margin="normal"
      placeholder="Type a city"
      value={value}
      onChange={({ target }) => {
        setValue(target.value);
        handleChange(target.value);
      }}
      {...rest}
    />
  );
}
