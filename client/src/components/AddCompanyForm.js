import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import FormControl from "@mui/material/FormControl";

export default function AddCompanyForm(props) {
  const FORM_ENTRY = {
    repo_name: "",
    team_name: "",
    technology: "",
    company_name: "",
  };
  const [input, setInput] = React.useState(FORM_ENTRY);
  const handleChange = (e) => {
    setInput((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  //addCompany
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addCompany(input);
  };
  return (
    <Container style={{ borderColor: "red" }}>
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
          <Grid sm={6} item>
            sdkljfksdjf
          </Grid>
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
