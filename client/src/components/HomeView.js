import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import AddCompanyForm from "./AddCompanyForm";
import "./HomeView.scss";

export default function HomeView(props) {
  return (
    <main className="home">
      <section className="women">
        <Container>
          <Grid container spacing={2}>
            <Grid sm={6} item>
              <h2>Does your codebase the Test?</h2>
              <ul>
                <li>
                  Has two production commits by two separate womenx engineers
                </li>
                <li>Question Two</li>
              </ul>
            </Grid>
            <Grid item sm={6} style={{ background: "#fff", padding: 20 }}>
              <AddCompanyForm addCompany={props.addCompany} />
            </Grid>
          </Grid>
        </Container>
      </section>
    </main>
  );
}
