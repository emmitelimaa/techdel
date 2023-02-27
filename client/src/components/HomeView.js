import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { URL } from "../constants";
import CodeIcon from "@mui/icons-material/Code";
import AddCompanyForm from "./AddCompanyForm";
import "./HomeView.scss";

export default function HomeView(props) {
  return (
    <main className="home">
      <section className="women">
        <Container>
          <Grid container spacing={2}>
            <Grid sm={6} item>
              <h2 className="emphasis">
                <CodeIcon
                  style={{
                    width: 40,
                    height: 40,
                    position: "absolute",
                    left: 350,
                    color: "#E96479",
                  }}
                />
                <br />
                Does your codebase pass the test?
              </h2>
              <ol>
                <li>
                  It has to have at least two functions written by two separate
                  female engineers.
                </li>
                <li>These two functions call each other</li>
              </ol>
              <Link to={URL.COMPANIES}>
                <Button size="large" variant="contained">
                  View Companies
                </Button>
              </Link>
            </Grid>
            <Grid
              item
              sm={6}
              style={{ background: "#fff", padding: 20, marginTop: 20 }}
            >
              <AddCompanyForm addCompany={props.addCompany} />
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="second">
        <Container>
          <Grid container spacing={2}>
            <Grid sm={6} item>
              <h2 className="emphasis">Why?</h2>
            </Grid>
          </Grid>
        </Container>
      </section>
    </main>
  );
}
