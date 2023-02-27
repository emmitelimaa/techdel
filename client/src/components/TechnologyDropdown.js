import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

import data from "../languages.json";
export default function TechnologyDropdown(props) {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        value={props.value}
        options={data.map((option) => option)}
        onChange={(event, newValue) => {
          props.onSelect(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="Primary Technology" />
        )}
      />
    </Stack>
  );
}
