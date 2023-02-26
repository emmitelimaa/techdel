import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

import { API } from "../constants";

export default function AddCompanyForm() {
  const FORM_ENTRY = {
    repo_name: "",
    team_name: "",
    technology: "",
    company_name: "",
  };
  const [input, setInput] = useState(FORM_ENTRY);
  const handleChange = (e) => {
    setInput((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const addCompany = async (input) => {
    const { company_name, repo_name, team_name, technology } = input;
    const formatInput = {
      company_name,
      repo: [
        {
          repo_name,
          team_name,
          technology,
        },
      ],
    };
    try {
      let options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formatInput),
      };

      let response = await fetch(`${API.POST_ALL}`, options);
      if (response.ok) {
        let listItem = await response.json();
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Server Error`);
    }
  };
  //addCompany
  const handleSubmit = (e) => {
    e.preventDefault();
    addCompany(input);
    setInput(FORM_ENTRY);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid sm={12} item>
            <TextField
              label="Company Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="company_name"
              value={input.company_name}
              onChange={handleChange}
            />
          </Grid>
          <Grid sm={12} item>
            <Typography variant="h5">Project or Codebase Info</Typography>
          </Grid>
          <Grid sm={6} item>
            <TextField
              label="Codebase/Repo Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="repo_name"
              value={input.repo_name}
              onChange={handleChange}
            />
          </Grid>
          <Grid sm={6} item>
            <TextField
              label="Team Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="team_name"
              value={input.team_name}
              onChange={handleChange}
            />
          </Grid>
          <Grid sm={6} item>
            <TextField
              label="Code"
              variant="outlined"
              fullWidth
              margin="normal"
              name="technology"
              value={input.technology}
              onChange={handleChange}
            />
          </Grid>
          <Grid sm={6} item></Grid>
          <Grid sm={12} item>
            <Button size="large" variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
