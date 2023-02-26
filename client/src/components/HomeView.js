import React from "react";
import Container from "@mui/material/Container";

import AddCompanyForm from "./AddCompanyForm";
import "./HomeView.scss";

export default function HomeView(props) {
  return (
    <main className="home">
      <section className="women">
        <h2>Does your company Pass the Test?</h2>
      </section>

      <Container></Container>
      <Container>
        <AddCompanyForm addCompany={props.addCompany} />
      </Container>
    </main>
  );
}
