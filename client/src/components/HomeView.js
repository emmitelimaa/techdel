import React from "react";
import Container from "@mui/material/Container";

import AddCompanyForm from "./AddCompanyForm";

export default function HomeView(props) {
  return (
    <>
      <Container style={{ borderColor: "red" }}>
        <AddCompanyForm addCompany={props.addCompany} />
      </Container>
    </>
  );
}
